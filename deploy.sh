#!/usr/bin/env bash
# Build the static site and publish it to https://bellakdev.com.
# Caddy (configured by the hase repo's server/deploy/Caddyfile) serves
# /var/www/portfolio for every path the hase site doesn't claim.
set -euo pipefail
cd "$(dirname "$0")"

IP=35.170.131.2
SSH_KEY=~/.ssh/lightsail-us-east-1.pem

npm run build
COPYFILE_DISABLE=1 tar --no-xattrs -czf - -C out . | ssh -i "$SSH_KEY" -o IdentitiesOnly=yes "ubuntu@$IP" \
  'sudo rm -rf /var/www/portfolio.new && sudo mkdir -p /var/www/portfolio.new && sudo tar xzf - -C /var/www/portfolio.new --no-same-owner && sudo chmod -R a+rX /var/www/portfolio.new && sudo rm -rf /var/www/portfolio && sudo mv /var/www/portfolio.new /var/www/portfolio'
echo "Deployed: https://bellakdev.com"
