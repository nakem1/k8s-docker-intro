FROM alpine:3.12

ENV ip=192.168.99.115

EXPOSE 21 21000

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories

RUN apk update
RUN apk add pure-ftpd openssl
RUN adduser -D admin && echo admin:admin | chpasswd
RUN mkdir -p ftps/admin
RUN apk add telegraf openrc && openrc && touch /run/openrc/softlevel
COPY /srcs/ srcs
RUN openssl req -newkey rsa:2048 -x509 -sha256 -days 90 -nodes -out /etc/ssl/private/ftpd-selfsigned.pem -keyout /etc/ssl/private/ftpd-selfsigned.pem -subj "/C=RU/ST=Tatarstan/L=Kazan/O=21school/OU=lmurray/CN=ft_server"
RUN chmod 600 /etc/ssl/private/ftpd-selfsigned.pem
RUN mv srcs/telegraf.conf /etc/
ENTRYPOINT sh srcs/ftps.sh
