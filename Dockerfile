FROM node:8.16.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

COPY wait-for-it.sh wait-for-it.sh

RUN chmod +x wait-for-it.sh

RUN npm install

EXPOSE 3001

