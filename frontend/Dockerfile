FROM node:13.12.0-alpine
ENV PORT 3000
WORKDIR /frontend
# install app dependencies
COPY ./package.json ./
RUN npm install --silent
# add app
COPY . ./
# start app
EXPOSE 3000
CMD "npm" "run" "dev"