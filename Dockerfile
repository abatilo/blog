FROM klakegg/hugo:0.81.0 as builder

WORKDIR /src
COPY config.toml ./
COPY content ./content
COPY layouts ./layouts
COPY themes ./themes
RUN hugo

FROM nginx:1.19.7-alpine

COPY --from=builder /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
