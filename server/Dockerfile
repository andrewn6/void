FROM node:16

EXPOSE 3000

COPY . .

COPY package.json yarn.lock ./

RUN yarn

WORKDIR /server

CMD ["ts-node", "index.ts"]