FROM alpine:3.12

EXPOSE 8086

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk update
RUN apk upgrade
RUN apk add openrc influxdb telegraf

RUN openrc && touch /run/openrc/softlevel
VOLUME [ "/var/lib/influxdb" ]
COPY /srcs/ /srcs/
RUN mv srcs/telegraf.conf /etc/
ENTRYPOINT sh srcs/influxdb.sh
