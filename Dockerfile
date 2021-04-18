FROM klakegg/hugo:0.82.0 as builder

WORKDIR /src
COPY config.toml ./
COPY content ./content
COPY layouts ./layouts
COPY static ./static
COPY themes ./themes
RUN hugo

FROM nginx:1.19.10-alpine

COPY --from=builder /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
