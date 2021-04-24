openrc
touch /run/openrc/softlevel
rc-status
/etc/init.d/telegraf start
#chown -R admin:admin  /home/admin
#/usr/sbin/pure-ftpd -p 21005:21005 -P 192.168.99.115 -Y 2
/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf
