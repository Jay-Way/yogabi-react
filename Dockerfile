FROM node:21-alpine

WORKDIR /home/node/app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g serverless
RUN npm install

RUN apk add --no-cache aws-cli

# add app
COPY . ./

RUN serverless plugin install -n serverless-s3-sync

CMD [ "npm", "run", "dev" ]
