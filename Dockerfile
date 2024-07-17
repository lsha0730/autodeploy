FROM oven/bun
USER bun

WORKDIR /app
COPY . .
RUN bun install
EXPOSE 8000

CMD ["bun", "start"]