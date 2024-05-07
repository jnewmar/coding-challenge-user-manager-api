FROM node:18

WORKDIR /user-manager-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start
