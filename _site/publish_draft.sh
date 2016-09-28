#!/bin/sh
DATE=`date +%Y-%m-%d`
LATEST_FILE=`ls -t _drafts/ | head -n 1`
mv "_drafts/$LATEST_FILE" "_posts/$DATE-$LATEST_FILE"
