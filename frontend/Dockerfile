# Dockerfile for React client

# Build react client
FROM node:16-alpine

# Working directory be app
WORKDIR /usr/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . ./

CMD ["npm","start"]