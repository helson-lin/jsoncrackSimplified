FROM nginx:alpine
COPY --chown=nginx:nginx /out /app
COPY default.conf /etc/nginx/conf.d/default.conf
