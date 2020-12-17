FROM node:14-alpine AS build
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
ARG STAGE
RUN mv .env.$STAGE .env
RUN yarn build

FROM nginx:1.19.5-alpine AS nginx
COPY --from=build /app/build /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 9000
