FROM node:21-alpine3.19

WORKDIR /react-app

EXPOSE 3000

RUN apk update && apk add aws-cli --no-cache

RUN npm install -g serverless

USER node

