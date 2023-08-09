FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.8.1

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
