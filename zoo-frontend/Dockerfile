FROM node:alpine

MAINTAINER Matthew Yamout

#Create app directory
WORKDIR /usr/src/app

RUN npm install yarn
#Install dependencies
COPY app/. .
RUN yarn
CMD ["yarn", "webpack"]