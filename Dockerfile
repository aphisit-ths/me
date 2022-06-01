FROM node:alpine3.14

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies

COPY package.json /app/package.json

RUN npm i

CMD [ "npm" ,"start" ]