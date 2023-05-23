#!/bin/sh

echo "### Starting nginx..."
echo "### Checking if the initial certificate exists..."
echo "/etc/letsencrypt/live/$DOMAIN_PATH/fullchain.pem"

# Generate nginx.conf from the template
echo "### Generating nginx.conf..."
if [ "$NODE_ENV" = "production" ]; then
  echo "### Production environment detected"
  echo "### Substituting environment variables"
    # Check if the initial certificate exists
    if [ ! -f "/etc/letsencrypt/live/$DOMAIN_PATH/fullchain.pem" ]; then
      echo "### Starting get_initial_certificate.sh script..."
      /get_initial_certificate.sh
    else
      echo "### Skipping get_initial_certificate.sh script, initial certificate exists...";
    fi
  envsubst "\$SERVER_NAMES \$DOMAIN_PATH" < /etc/nginx/nginx.conf.prod.template > /etc/nginx/nginx.conf
else
  echo "### Development environment detected"
  echo "### Substituting environment variables"
  envsubst "\$SERVER_NAMES \$DOMAIN_PATH" < /etc/nginx/nginx.conf.dev.template > /etc/nginx/nginx.conf
fi

# Start Nginx in the foreground
echo "### Starting nginx..."
nginx -g "daemon off;"
