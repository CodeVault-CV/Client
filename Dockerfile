FROM node:latest

RUN npm install -g serve

RUN mkdir /app
WORKDIR /app

# COPY package*.json ./
# RUN npm install

RUN mkdir ./build

ADD ./build ./build

# RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "-n", "build"]