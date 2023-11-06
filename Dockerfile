FROM node:18 as build

WORKDIR /usr/src/app
COPY ./ /usr/src/app/

RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/src/app/dist/re-client /usr/share/nginx/html
EXPOSE 4200