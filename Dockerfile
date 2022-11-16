FROM node:latest AS builder

RUN mkdir app

WORKDIR app

COPY . app/

RUN cd app/server/ && npm i && npm run build
RUN cd app/client/ && npm i && npm run build

FROM builder

ENV NODE_ENV=production

WORKDIR app

COPY --from=builder app/dist .

RUN npm install --production

CMD [ "npm" , "run", "prod"]
