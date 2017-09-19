FROM node

MAINTAINER Matthew Yamout

#Create app directory
WORKDIR /usr/src/app

RUN npm install yarn
#Install dependencies
COPY app/package.json .
RUN yarn install
RUN yarn global add webpack
# CMD ["webpack"]
