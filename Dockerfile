FROM jekyll/builder:3.8.5 as builder

WORKDIR /src
COPY Gemfile Gemfile.lock /src/
RUN bundle install

COPY . .
RUN chown -R jekyll:jekyll /src
RUN jekyll build

FROM nginx:1.15.7-alpine
COPY --from=builder /src/_site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
