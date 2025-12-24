#!/bin/sh
 
echo "window._env_ = {
  \"VITE_API_BASE_URL\": \"$VITE_API_BASE_URL\"
};" > /usr/share/nginx/html/env-config.js
 
# Start Nginx
exec "$@
