# Build context = racine du projet. Base épinglée au digest (node 22 LTS alpine).
FROM node:22-alpine@sha256:968df39aedcea65eeb078fb336ed7191baf48f972b4479711397108be0966920 AS builder
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
# Garantit la présence des binaires natifs (esbuild/parcel-watcher) en build propre.
RUN pnpm rebuild esbuild @parcel/watcher vue-demi
RUN pnpm build

# Runtime minimal : seul le bundle Nitro .output, non-root.
FROM node:22-alpine@sha256:968df39aedcea65eeb078fb336ed7191baf48f972b4479711397108be0966920 AS runtime
RUN apk add --no-cache curl \
    && addgroup -g 10001 appuser \
    && adduser -D -u 10001 -G appuser appuser
WORKDIR /app
COPY --from=builder --chown=appuser:appuser /app/.output ./.output
USER appuser
ENV NITRO_HOST=0.0.0.0 NITRO_PORT=3000
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -fsS http://localhost:3000/ || exit 1
CMD ["node", ".output/server/index.mjs"]
