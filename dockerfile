FROM node:14.15.5

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build --prefix client

CMD ["node", "index.js"]