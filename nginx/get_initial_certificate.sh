#!/bin/sh

echo "### Requesting Let's Encrypt certificate for $DOMAIN_NAMES ..."
# Create a temporary Nginx configuration file for the certbot challenge
echo "events {} http { server { listen 80; server_name $SERVER_NAMES; location /.well-known/acme-challenge/ { root /var/www/certbot; } } }" > /etc/nginx/temp_nginx.conf

# Start Nginx with the temporary configuration
nginx -c /etc/nginx/temp_nginx.conf -g "daemon off;" &

# Request the certificate
certbot certonly --webroot -w /var/www/certbot -d "$DOMAIN_NAMES" --email "$CERTIFICATION_EMAIL" --agree-tos --no-eff-email --keep-until-expiring

# Stop the temporary Nginx instance
nginx -s stop

##!/bin/bash
#
## Set your domain names here
#domains=(example.org www.example.org)
#email="your-email@example.com" # Enter your email here
#
## Pull the latest certbot/certbot image
#docker pull certbot/certbot
#
## Create the required directories for Certbot
#mkdir -p ./data/certbot/conf
#mkdir -p ./data/certbot/www
#
## Run the certbot container to obtain the initial certificate
#docker run -it --rm \
#  -v "$(pwd)/data/certbot/conf:/etc/letsencrypt" \
#  -v "$(pwd)/data/certbot/www:/var/www/certbot" \
#  certbot/certbot \
#  certonly \
#  --webroot \
#  --webroot-path=/var/www/certbot \
#  --email $email \
#  --agree-tos \
#  --no-eff-email \
#  --staging \ # Remove this line for a production certificate
#  -d "${domains[0]}" -d "${domains[1]}"