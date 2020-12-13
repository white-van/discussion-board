FROM node:13.12.0-alpine
WORKDIR /frontend
# install app dependencies
COPY ./package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

# add app
COPY . ./
# start app
CMD ["npm", "start"]