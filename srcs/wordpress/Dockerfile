FROM alpine:3.12.3


EXPOSE	5050
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk update
RUN apk upgrade
RUN apk add nginx telegraf openrc && mkdir /run/nginx;

RUN apk add php7-common php7-curl php7-xml php7-mysqli \
php7-imap php7-cgi fcgi php7-iconv php7-json php7-gd \
php7-mcrypt php7-gettext php7-ldap php7-ctype php7-dom \
php7-pdo php7-pdo_mysql php7-soap php7-xmlrpc php7-posix php php-fpm

RUN		mkdir srcs
COPY	srcs/* /srcs/
RUN		wget http://wordpress.org/latest.tar.gz && tar -xzvf latest.tar.gz
RUN		mv wordpress /var/www/localhost/htdocs
RUN		mv srcs/wp-config.php /var/www/localhost/htdocs/wordpress
RUN		mv srcs/default.conf /etc/nginx/conf.d
RUN		mv srcs/telegraf.conf /etc/
#VOLUME	[“/sys/fs/cgroup”]
ENTRYPOINT sh srcs/wp.sh
