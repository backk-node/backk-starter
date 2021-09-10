# syntax=docker/dockerfile:1
FROM node:14

RUN groupadd -g 2000 microservice && \
    useradd -u 1000 -g microservice -s /bin/bash microservice-user

WORKDIR /microservice
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production
COPY build build/
USER 1000
CMD [ "node", "build/main" ]
