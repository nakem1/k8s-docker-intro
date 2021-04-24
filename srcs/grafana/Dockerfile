FROM alpine:3.12

EXPOSE 3000

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk update
RUN apk upgrade
RUN apk add openrc grafana telegraf
RUN openrc && touch /run/openrc/softlevel
COPY /srcs/ /srcs/
RUN	 mkdir -p /usr/share/grafana/data/
RUN  mv ./srcs/grafana.db /usr/share/grafana/data/
RUN  mv ./srcs/telegraf.conf /etc/
RUN  mv ./srcs/grafana.ini /etc/
ENTRYPOINT sh srcs/grafana.sh
