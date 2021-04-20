openrc
touch /run/openrc/softlevel
rc-status
/etc/init.d/telegraf start
#rc-service sshd start
nginx -g 'daemon off;'
