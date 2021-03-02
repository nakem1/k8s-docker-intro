FROM alpine:latest

EXPOSE 80 443

RUN mkdir srcs
COPY srcs/* /srcs/

RUN apk update \
	&& apk upgrade \
	&& apk add nginx \

RUN mv ./srcs/nginx.conf ./etc/nginx/conf.d/default.conf
RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled
RUN service nginx start
RUN openssl req -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out /etc/nginx/ssl/localhost.pem -keyout /etc/nginx/ssl/localhost.key -subj "/C=RU/ST=Tatarstan/L=Kazan/O=21school/OU=lmurray/CN=ft_server"
RUN service nginx start && bash
