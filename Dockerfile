FROM nginx

COPY /src/index.html /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx"]