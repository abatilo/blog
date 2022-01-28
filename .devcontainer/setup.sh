#!/bin/bash

## update and install some things we should probably have
apt-get update
apt-get install -y \
  curl \
  gh \
  git \
  gnupg2 \
  jq \
  sudo \
  zsh
