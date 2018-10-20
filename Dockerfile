FROM node:10.11.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g knex

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
