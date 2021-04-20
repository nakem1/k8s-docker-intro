FROM alpine:3.12

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk update
RUN apk add nginx openssl openrc telegraf && mkdir /run/nginx;

RUN apk add wget php7-common php7-iconv php7-json php7-gd php7-curl \
php7-xml php7-mysqli php7-imap php7-cgi fcgi php7-pdo php7-pdo_mysql \
php7-ctype php7-dom php php-fpm php-session php-mbstring php-gettext \
php7-soap php7-xmlrpc php7-posix php7-mcrypt php7-gettext php7-ldap

COPY srcs/* /srcs/
RUN mv srcs/default.conf /etc/nginx/conf.d
RUN mv srcs/telegraf.conf /etc/
RUN mkdir -p /usr/share/webapps/
RUN set -x ; addgroup -g 82 -S www-data ; adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

RUN wget http://files.directadmin.com/services/all/phpMyAdmin/phpMyAdmin-5.0.2-all-languages.tar.gz && \
tar -zxvf phpMyAdmin-5.0.2-all-languages.tar.gz
RUN mv phpMyAdmin-5.0.2-all-languages /usr/share/webapps/phpmyadmin
RUN mv srcs/config.inc.php /usr/share/webapps/phpmyadmin

RUN openssl req -newkey rsa:2048 -x509 -sha256 -days 90 -nodes -out /etc/ssl/private/nginx-selfsigned.pem -keyout /etc/ssl/private/nginx-selfsigned.key -subj "/C=RU/ST=Tatarstan/L=Kazan/O=21school/OU=lmurray/CN=ft_server"

ENTRYPOINT sh srcs/phpmyadmin.sh
