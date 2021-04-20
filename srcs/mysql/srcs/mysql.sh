/etc/init.d/telegraf start

/etc/init.d/mariadb setup
/etc/init.d/mariadb start

mysql --user=root -e "CREATE DATABASE wordpress; use wordpress"
mysql --user=root -e "CREATE DATABASE phpmyadmin; use phpmyadmin"
mysql -u root -e "CREATE USER 'admin'@'%' IDENTIFIED BY 'admin'"
mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%'; FLUSH PRIVILEGES;"
mysql -u root wordpress < /srcs/wordpress.sql
sh usr/share/mariadb/mysql.server start
tail -f /dev/null
