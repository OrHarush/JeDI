FROM node:latest

ENV NODE_ENV=production
ENV HOME=/home/app

RUN cd server/ && npm run build
RUN cd client/ && npm run build

COPY dist $HOME/

WORKDIR $HOME/

RUN npm install --production

CMD [ "npm" , "run", "prod"]