#!/bin/bash

DOMAIN_NAME="www.mydomainhere.com"
WEBROOT_PATH="/var/www/certbot"

# Check if the HTTPS site is available
if ! curl --head --silent --fail https://${DOMAIN_NAME}; then
    echo "HTTPS site is not available, running Certbot renewal"
    certbot renew --staging --webroot -w ${WEBROOT_PATH} --quiet --post-hook 'nginx -s reload'
fi

# Add this script to crontab if it's not already there
if ! crontab -l | grep -q "${BASH_SOURCE[0]}"; then
    (crontab -l ; echo "0 */12 * * * ${BASH_SOURCE[0]}") | crontab -
    echo "Added Certbot renewal to crontab"
fi