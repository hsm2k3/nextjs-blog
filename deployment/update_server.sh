#!/bin/bash

set -e

echo 'UPDATE_SERVER.SH is in...'
pwd

# Update the server
sudo yum update -y
sudo amazon-linux-extras install -y docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Check if docker-compose is symlinked or if it exists, if  not, symlink it
if [ ! -L /usr/bin/docker-compose ] || [ -e /usr/bin/docker-compose ]; then
  sudo unlink /usr/bin/docker-compose
  sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
fi

