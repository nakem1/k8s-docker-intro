cd /usr/share/webapps

chmod -R 777 /usr/share/webapps/
ln -s /usr/share/webapps/phpmyadmin/ /var/www/localhost/htdocs/phpmyadmin
ln -s /usr/share/webapps/phpmyadmin/ /var/www/html/

cd /
chown -R www-data:www-data /usr/share/webapps/phpmyadmin/ /var/www/html
chmod -R a-x,a=rX,u+w /usr/share/webapps/phpmyadmin/ /var/www/html

openrc
touch /run/openrc/softlevel
rc-status
/etc/init.d/telegraf start
rc-service -v php-fpm7 start
nginx -g 'daemon off;'
