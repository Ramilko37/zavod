FROM node:15.2.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
COPY yarn.lock /app/
RUN apk --no-cache add g++ make libpng-dev && yarn install
COPY . /app
RUN yarn build
# start app
CMD [ "yarn", "start" ]