minikube stop
minikube delete
minikube start --driver=virtualbox --cpus=4 --memory=4G
minikube addons enable dashboard
minikube addons enable metallb
eval $(minikube -p minikube docker-env)
#minikube ssh 'sudo mkdir /mnt/mysql; sudo chmod 777 /mnt/mysql '
#minikube ssh 'sudo mkdir /mnt/influxdb; sudo chmod 777 /mnt/influxdb '

kubectl apply -f metallb.yaml

docker build -t nginx_image ./srcs/nginx/
kubectl apply -f srcs/nginx/nginx.yaml

docker build -t phpmyadmin_image ./srcs/phpmyadmin/
kubectl apply -f srcs/phpmyadmin/php.yaml

docker build -t wordpress_image ./srcs/wordpress/
kubectl apply -f srcs/wordpress/wp.yaml

docker build -t mysql_image ./srcs/mysql/
kubectl apply -f srcs/mysql/mysql.yaml

#docker build -t influxdb_image ./srcs/influxdb/
#kubectl apply -f srcs/influxdb/influxdb.yaml

#docker build -t grafana_image ./srcs/grafana/
#kubectl apply -f srcs/grafana/grafana.yaml

#docker build -t ftps_image ./srcs/ftps/
#kubectl apply -f srcs/ftps/ftps.yaml

#ssh-keygen -R 192.168.99.115

minikube dashboard &
