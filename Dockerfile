FROM node:18 as build
WORKDIR /usr/src/app
RUN npm i -g @angular/cli 
COPY package.json package.json 
RUN npm install
COPY . .
RUN ng build

FROM nginx:latest
COPY nginx.conf etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/re-client /usr/share/nginx/html