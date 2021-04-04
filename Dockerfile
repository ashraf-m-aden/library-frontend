FROM nginx
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY  ./library/ /usr/share/nginx/html
