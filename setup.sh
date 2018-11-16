apt update

# install all docker containers necessary
apt install docker.io
docker ps
docker run --name database -p 3306:3306 -e MYSQL_ROOT_PASSWORD=r3d3s -d mysql:5
docker run -it --name api -p 4000:80 -v ./api:/usr/share/nginx/html ilangoldman/nuvem:webserver
docker run -it --name interface -p 80:80 -v ./dbserver/dist:/usr/share/nginx/html ilangoldman/nuvem:webserver
docker ps
docker exec interface service nginx restart
docker exec api service php7.0-fpm restart
docker exec api service nginx restart

# set the security rules for the server
iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
iptables -A INPUT -p smtp -j DROP
iptables -A INPUT -p tcp -m multiport --dports 80,4000,3306 -j ACCEPT
iptables -L -n -v