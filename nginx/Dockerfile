# Dockerfile for Nginx
FROM nginx:stable-alpine

# Install certbot and the Nginx plugin
RUN apk add --no-cache certbot-nginx

COPY nginx.conf.prod.template /etc/nginx/nginx.conf.prod.template
COPY nginx.conf.dev.template /etc/nginx/nginx.conf.dev.template
COPY entrypoint.sh /entrypoint.sh
COPY get_initial_certificate.sh /get_initial_certificate.sh

RUN chmod +x /entrypoint.sh /get_initial_certificate.sh

ENTRYPOINT ["/entrypoint.sh"]
