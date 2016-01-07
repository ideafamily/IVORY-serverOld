#!/bin/bash
while read line; do export "$line";
done < .env;
babel-node server;
