FROM node:21-alpine
WORKDIR /home/node/app
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

CMD [ "npm", "run", "dev" ]
