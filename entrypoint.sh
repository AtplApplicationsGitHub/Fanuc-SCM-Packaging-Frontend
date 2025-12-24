#!/bin/sh
set -e

# Inject the environment variable into a JS file for the frontend
echo "window._env_ = {
  \"VITE_API_BASE_URL\": \"$VITE_API_BASE_URL\"
};" > /usr/share/nginx/html/env-config.js
