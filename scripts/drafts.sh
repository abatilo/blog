#!/usr/bin/env bash

docker run \
  --rm -it \
  -v $(pwd):/src -w /src \
  -p 1313:1313 \
  hugomods/hugo:0.117.0 sh -c "hugo server --buildDrafts --buildFuture --navigateToChanged --bind=0.0.0.0"
