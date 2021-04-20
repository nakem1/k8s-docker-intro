FROM alpine:3.12
 
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk update \
	&& apk add nginx \
	&& apk add openssl

RUN apk add telegraf
RUN apk add openrc
RUN apk add sudo
RUN apk add openssh

RUN mkdir srcs
COPY srcs/* /srcs/

RUN mkdir -p /run/nginx
RUN rm -rf ./etc/nginx/conf.d/default.conf

EXPOSE 80 443

RUN mv ./srcs/default.conf ./etc/nginx/conf.d/
#RUN mv ./etc/nginx/conf.d/nginx.conf ./etc/nginx/conf.d/default.conf
RUN mv ./srcs/telegraf.conf /etc/
RUN mv ./srcs/index.html /var/www/localhost/htdocs
RUN mv ./srcs/script.js /var/www/localhost/htdocs
RUN mv ./srcs/style.css /var/www/localhost/htdocs

# RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled
RUN openssl req -newkey rsa:2048 -x509 -sha256 -days 90 -nodes -out /etc/ssl/private/nginx-selfsigned.pem -keyout /etc/ssl/private/nginx-selfsigned.key -subj "/C=RU/ST=Tatarstan/L=Kazan/O=21school/OU=lmurray/CN=ft_server"


RUN adduser -D lmurray && echo "lmurray:root" | chpasswd &&  addgroup lmurray wheel && echo '%wheel ALL=(ALL) ALL' > /etc/sudoers.d/wheel && /usr/bin/ssh-keygen -A

ENTRYPOINT sh srcs/nginx.sh
