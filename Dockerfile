FROM hugomods/hugo:0.127.0 as builder

WORKDIR /src
COPY --link config.toml ./
COPY --link content ./content
COPY --link layouts ./layouts
COPY --link static ./static
COPY --link themes ./themes
RUN hugo --minify

FROM nginx:1.27.0-alpine

COPY --link --from=builder /src/public /usr/share/nginx/html
COPY --link nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
