FROM docker.io/node:18-alpine AS build

ADD . /latin_ui
WORKDIR /latin_ui
RUN yarn
RUN yarn build

FROM docker.io/nginx:1.23-alpine

COPY --from=build /latin_ui/dist /usr/share/nginx/html