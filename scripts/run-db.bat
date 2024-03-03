@echo off

echo Run local development version of a database for Quick Project Application

docker create -p 5432:5432 --name dev_db ^
  -e POSTGRES_USER=pet ^
  -e POSTGRES_PASSWORD=password ^
  -e POSTGRES_DB=pet ^
  --restart unless-stopped ^
  postgres:14.5-alpine
docker stop dev_db
docker start dev_db
