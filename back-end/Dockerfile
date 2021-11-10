FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package*.json ./

ENTRYPOINT ["/bin/bash", "./entrypoint.sh"] 

COPY . .

EXPOSE 3072

CMD [ "index.js" ]