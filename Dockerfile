FROM node:12.18.3-buster-slim as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn config set strict-ssl false 
RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

FROM nginx
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=0 /app/build /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'