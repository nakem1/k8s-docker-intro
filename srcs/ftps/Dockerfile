FROM	alpine:3.12

RUN		apk update
RUN		apk add --no-cache vsftpd supervisor openssl
RUN		apk add telegraf --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/ --allow-untrusted

COPY	/srcs/ srcs
RUN		mkdir -p /etc/telegraf/
RUN		mv ./srcs/telegraf.conf		/etc/telegraf/
RUN		mv ./srcs/supervisord.conf	/etc/
RUN		mv ./srcs/vsftpd.conf		/etc/

RUN		openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -subj '/CN=localhost' -nodes

RUN		mkdir /var/nakem
RUN		adduser -D nakem && echo "nakem:mekan" | chpasswd
RUN		chmod 777 /var/nakem

EXPOSE	21 21000
CMD		["/usr/bin/supervisord"]
