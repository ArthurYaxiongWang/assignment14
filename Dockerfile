FROM node:lts-iron

WORKDIR /react-docker-example-test-docker/

COPY package.json /react-docker-example-test-docker/

COPY . /react-docker-example-test-docker/

RUN npm install

CMD ["npm","run","storybook"]