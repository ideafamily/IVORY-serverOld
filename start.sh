#!/bin/bash
while read line; do export "$line";
done < .devenv;
babel-node server;
