FROM node:19.7-alpine AS builder

WORKDIR /app

COPY . .
RUN npm install --omit=dev && npm run build

FROM node:19.7-alpine

WORKDIR /app

RUN npm install -g serve
COPY --from=builder /app/build /app/build

EXPOSE 3000

CMD ["serve", "-s", "build"]
