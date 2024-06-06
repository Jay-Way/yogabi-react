FROM node:21-alpine3.19

WORKDIR /react-app

EXPOSE 3000

RUN apk update && apk add aws-cli --no-cache

RUN serverless plugin install -n serverless-s3-sync

USER node

