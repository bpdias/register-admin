FROM node:11.11.0

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .

CMD npm start
