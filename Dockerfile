FROM denoland/deno:alpine as builder

# chache lume builder for future builds
WORKDIR /app
ADD deno.json ./\
    deno.lock ./\
    build.ts ./
RUN deno cache build.ts

# build site
ADD . .
RUN deno task build


# build nginx webserver
FROM nginx:alpine

EXPOSE 80

ADD ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site /var/www/html
