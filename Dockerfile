FROM node:latest AS builder

RUN mkdir app

WORKDIR app

COPY . app/

RUN cd app/server/ && npm i && npm run build
RUN cd app/client/ && npm i && npm run build
RUN ls

FROM builder

USER root

ENV NODE_ENV=production
RUN ls -l
WORKDIR /app/app/dist
RUN ls -l
RUN pwd
# COPY dist/ .
# RUN ls -l
RUN npm install --production

RUN chown -R 1001:0 /app/app/dist && chmod -R ug+rwx /app/app/dist && chown -R 1001:0 "/.npm"

USER 1001 

CMD [ "npm" , "run", "prod"]
