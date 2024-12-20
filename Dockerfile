FROM node:18-alpine
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app
COPY tsconfig.json /app
WORKDIR /app
RUN npm install
CMD npm start