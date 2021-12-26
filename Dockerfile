# syntax=docker/dockerfile:1

FROM node:14 as builder
WORKDIR /microservice
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY resources ./resources
COPY src ./src
RUN npm run build

FROM node:14 as intermediate
WORKDIR /microservice
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /microservice/build ./build
COPY --from=builder /microservice/src ./src

FROM gcr.io/distroless/nodejs:14 as final
WORKDIR /microservice
USER nonroot:nonroot
COPY --from=intermediate --chown=nonroot:nonroot /microservice ./
CMD ["build/main"]
