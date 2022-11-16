FROM node:latest AS builder

RUN mkdir app

WORKDIR app

COPY . app/

RUN cd app/server/ && npm run build
RUN cd app/client/ && npm run build

FROM builder

ENV NODE_ENV=production

WORKDIR app

COPY app/dist .

RUN npm install --production

CMD [ "npm" , "run", "prod"]
