openrc
touch /run/openrc/softlevel
rc-status
/etc/init.d/telegraf start
chown -R admin:admin  /home/admin
/usr/sbin/pure-ftpd -p 21000:21000 -P $ip -Y 2
