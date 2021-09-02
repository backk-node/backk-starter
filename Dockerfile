# syntax=docker/dockerfile:1
FROM node:14
WORKDIR /microservice
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production
COPY build build/
EXPOSE 80
CMD [ "npm", "run", "start:prod" ]
