FROM jekyll/builder:3.8.5 as builder

WORKDIR /src
COPY Gemfile Gemfile.lock /src/
RUN bundle install

COPY 404.html _config.yml favicon.ico index.html ./
COPY about ./about
COPY _data ./_data
COPY _includes ./_includes
COPY _layouts ./_layouts
COPY _posts ./_posts
RUN chown -R jekyll:jekyll /src
RUN jekyll build

FROM nginx:1.15.7-alpine
COPY --from=builder /src/_site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
