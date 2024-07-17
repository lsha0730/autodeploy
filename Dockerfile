FROM oven/bun
USER bun

WORKDIR /app
COPY . .
RUN bun install

CMD ["bun", "start"]