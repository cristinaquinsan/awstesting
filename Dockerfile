FROM nginx

COPY default.conf /etc/nginx/conf.d/

COPY ./src/web/ /var/www/html/

EXPOSE 80

CMD ["nginx","-g daemon off;"]