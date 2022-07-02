FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# RUN npm run prestart

CMD ["node", "server.js"]