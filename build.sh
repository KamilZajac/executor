#!/usr/bin/env bash

ng build client
docker image build -t client -f client.Dockerfile .

ng build api
docker image build -t api -f api.Dockerfile .
