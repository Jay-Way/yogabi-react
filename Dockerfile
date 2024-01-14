FROM node:21-alpine

WORKDIR /home/node/app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g serverless
RUN npm install

RUN apk add --no-cache aws-cli
RUN serverless plugin install -n serverless-s3-sync

# add app
COPY . ./

CMD [ "npm", "run", "dev" ]
