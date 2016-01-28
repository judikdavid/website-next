FROM node:5.5

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build assets
RUN npm run build

EXPOSE 8000
CMD [ "npm", "start" ]
