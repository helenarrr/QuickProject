#### Разворачиваем Postgres:
- загружаем [контейнер с последним postgres](https://hub.docker.com/_/postgres): `docker pull postgres`
- если на локальной машине уже запущен сервис postgres, надо его остановить: для Windows я запустил `C:\Windows\System32\cmd.exe as Admin` и остановил командой `net stop postgresql-x64-10`
- запускаем контейнер с postgres: `docker run -p 5432:5432 -d --name pet_db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=pet postgres`   

[Основные команды Docker](https://tproger.ru/translations/top-10-docker-commands):
```
docker ps -a : посмотреть все контейнеры
docker stop topjava_db : остановить наш контейнер
docker start topjava_db : запустить его
docker rm topjava_db : удалить
docker help : справка по командам
```

Под Windows можно также управлять запуском docker из DockerDesktop.