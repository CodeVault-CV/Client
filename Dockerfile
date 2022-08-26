FROM node:latest

RUN npm install -g serve

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "-n", "build"]