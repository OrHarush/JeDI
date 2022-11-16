FROM node:latest AS builder

RUN mkdir app

WORKDIR app

COPY . app/

RUN cd app/server/ && npm i && npm run build
RUN cd app/client/ && npm i && npm run build
RUN ls

FROM builder

ENV NODE_ENV=production
RUN ls
WORKDIR app
RUN ls
COPY --from=builder dist .
RUN ls
RUN npm install --production

CMD [ "npm" , "run", "prod"]
