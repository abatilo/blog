#!/bin/bash

## update and install some things we should probably have
apt-get update
apt-get install -y \
  curl \
  git \
  jq \
  sudo \
  zsh
