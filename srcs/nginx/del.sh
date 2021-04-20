kubectl delete svc nginx-svc
kubectl delete deployment nginx-deployment
kubectl delete pods nginx-deployment-865d885ff7-vjqsv
docker image rm nginx_image
docker build -t nginx_image .
kubectl apply -f nginx.yaml
