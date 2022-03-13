---
layout:     post
title:      "Docker"
subtitle:   "Docker & Docker Compose"
date:       2022-03-08
author:     "awis.me"
header-img: "img/docker.jpg"
#header-mask: 50%
tags:
    - Docker
    - Directus
    - 随时更新
---

## 1. Docker

![picture 1](/img/1646728842198.png)  

client通过运行在主机上的docker daemon操作image和container，registry提供image的发布和下载（类似npm和pip）。

Docker 镜像是一个特殊的只读文件系统，提供容器运行时所需的程序、库、资源、配置等文件，还包含一些为运行时准备的配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。

Container是image的运行实例，是运行在宿主机上的一种特殊的进程。一个image可以有多个container。

![picture 2](/img/1646933884014.png)  
> Container是在Image基础上叠加了一个读写层，在container内部做一些写操作后，可以commit读写层生成新的image
> 
> 上图省略掉了存储配置文件信息的init层。init层位于上图image和container两层之间。存放运行操作系统时候需要写的一些目录/文件。例如/etc 目录。init层commit时候不提交。 因为没必要，每次只读层运行时候都会自动生成init层内容。




### 1.1. commands

```
# Image
docker pull hello-world   从registry下载hello-world image
docker images             查看本地有哪些image
docker rmi  <IMAGE ID>    删除某个image，可以只写ID的前几位

# Container
docker ps -a              查看有哪些container
docker run -it centos     交互式运行
docker run -d flask-hello-world  后台运行
docker start <container_name>   重启
docker rm <CONTAINER ID>    删除container
docker rm $(docker container ls -aq)   删除所有container
docker port <CONTAINER ID>  查看端口映射信息
docker cp local_file_name  49f7960eb7e4:/docker_file_name  拷贝文件到docker里面
docker attach <container name>  对于docker run/start 启动的容器，可以用这个来attach到控制台上看输出。
docker exec -it  directus-sqlite /bin/sh  在名字是 directus-sqlite的容器内执行sh
 
```


### 1.2. Dockerfile 

是用来build image的配置文件，从一个基础image开始，运行一些列配置命令，得到另外一个image

## 2. Docker Compose

一个用于定义，运行和管理多容器的工具. 运行起来之后，也可以用之前的docker命令来操作容器。

```
docker-compose up
docker-compose up -d  // 后台启动并运行容器
docker-compose ps
docker-compose logs  //查看几个服务各自的log
docker-compose port directus 8055   //查看directus服务的container 8055端口绑定到主机的哪个端口了
docker-compose start cache
docker-compose stop cache
docker-compose run directus sh   //在directus服务的container上运行sh
docker-compose down  //停止所有服务，并删除container
```

## 3. Examples

### 3.1. Docker

#### 3.1.1. directus

以下映射了两个卷，读取环境变量，然后交互式运行directus，container名字为directus-sqlite。

```
docker run -it --env-file=./env_sqlite  -v $PWD/:/directus/database -v $PWD/uploads:/directus/uploads --name="directus-sqlite" directus/directus:latest 
```

其中环境变量文件 env_sqlite

```shell
DB_CLIENT="sqlite3"
DB_FILENAME="/directus/database/data.db"

RATE_LIMITER_ENABLED=true
RATE_LIMITER_POINTS=50
RATE_LIMITER_DURATION=1
RATE_LIMITER_STORE=memory

CACHE_ENABLED=true
CACHE_TTL="30m"
CACHE_NAMESPACE="directus-cache"
CACHE_AUTO_PURGE=true

# memory | redis | memcache
CACHE_STORE=memory

ASSETS_CACHE_TTL="30m"

STORAGE_LOCATIONS="local"
STORAGE_LOCAL_DRIVER="local"
STORAGE_LOCAL_ROOT="/directus/uploads"

KEY="xxxxxxx-xxxxxx-xxxxxxxx-xxxxxxxxxx"
SECRET="abcdef"
ACCESS_TOKEN_TTL="15m"
REFRESH_TOKEN_TTL="7d"
REFRESH_TOKEN_COOKIE_SECURE="false"
REFRESH_TOKEN_COOKIE_SAME_SITE="lax"
REFRESH_TOKEN_COOKIE_NAME="directus_refresh_token"

CORS_ENABLED="true"
CORS_ORIGIN="true"
CORS_METHODS=GET,POST,PATCH,DELETE
CORS_ALLOWED_HEADERS=Content-Type,Authorization
CORS_EXPOSED_HEADERS=Content-Range
CORS_CREDENTIALS="true"
CORS_MAX_AGE=18000

AUTH_PROVIDERS="dingtalk"

AUTH_DINGTALK_DRIVER="oauth2"
AUTH_DINGTALK_CLIENT_ID="...."
AUTH_DINGTALK_CLIENT_SECRET="c6rCTM1nmIm-...."
AUTH_DINGTALK_AUTHORIZE_URL="https://fb.....cn/apipro/oauth_dingtalk/auth"
AUTH_DINGTALK_ACCESS_URL="https://fb.....cn/apipro/oauth_dingtalk/access_token"
AUTH_DINGTALK_PROFILE_URL="https://fb.....cn/apipro/oauth_dingtalk/profile"
AUTH_DINGTALK_ALLOW_PUBLIC_REGISTRATION="true"
AUTH_DINGTALK_DEFAULT_ROLE_ID="86a3338c-26a5-447d-bfbd-f938ee2c3c40"
AUTH_DINGTALK_ICON="alipay"

EXTENSIONS_PATH="./extensions"

EMAIL_FROM="austin@....com"
EMAIL_TRANSPORT="smtp"

EMAIL_SMTP_POOL=false
EMAIL_SMTP_HOST="smtp........com"
EMAIL_SMTP_PORT=465
EMAIL_SMTP_SECURE=true # Use TLS
EMAIL_SMTP_IGNORE_TLS=false
EMAIL_SMTP_USER="austin@....com"
EMAIL_SMTP_PASSWORD="...."

```
后续就可以用docker start来启动directus。
```
MacBook-Pro-2:api wangxu$ docker ps -a
CONTAINER ID   IMAGE                      COMMAND                  CREATED         STATUS                     PORTS     NAMES
78acc6c46440   directus/directus:latest   "docker-entrypoint.s…"   6 minutes ago   Exited (1) 5 minutes ago             directus-sqlite
MacBook-Pro-2:api wangxu$ docker start directus-sqlite
directus-sqlite
MacBook-Pro-2:api wangxu$
```

#### 3.1.2. 基本操作

```
MacBook-Pro-2:apiproxy wangxu$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

MacBook-Pro-2:apiproxy wangxu$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
279a020076a7: Pull complete
ef0e42ecde96: Pull complete
5b148f48f52e: Pull complete
5596027e469a: Pull complete
a7c9963870b9: Pull complete
efce21e16a59: Pull complete
Digest: sha256:1c13bc6de5dfca749c377974146ac05256791ca2fe1979fc8e8278bf0121d285
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

MacBook-Pro-2:apiproxy wangxu$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
nginx        latest    9c1ff20ac9c9   6 days ago   134MB

MacBook-Pro-2:apiproxy wangxu$ docker run -it nginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2022/03/08 08:55:20 [notice] 1#1: using the "epoll" event method
2022/03/08 08:55:20 [notice] 1#1: nginx/1.21.6
2022/03/08 08:55:20 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)
...
^C2022/03/08 08:55:43 [notice] 1#1: signal 2 (SIGINT) received, exiting
2022/03/08 08:55:43 [notice] 32#32: signal 2 (SIGINT) received, exiting
2022/03/08 08:55:43 [notice] 31#31: signal 2 (SIGINT) received, exiting
2022/03/08 08:55:43 [notice] 32#32: exiting
2022/03/08 08:55:43 [notice] 31#31: exiting
2022/03/08 08:55:43 [notice] 32#32: exit
2022/03/08 08:55:43 [notice] 31#31: exit
2022/03/08 08:55:43 [notice] 1#1: signal 17 (SIGCHLD) received from 31
2022/03/08 08:55:43 [notice] 1#1: worker process 31 exited with code 0
2022/03/08 08:55:43 [notice] 1#1: signal 29 (SIGIO) received
2022/03/08 08:55:43 [notice] 1#1: signal 17 (SIGCHLD) received from 32
2022/03/08 08:55:43 [notice] 1#1: worker process 32 exited with code 0
2022/03/08 08:55:43 [notice] 1#1: exit


MacBook-Pro-2:apiproxy wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
12f3e6edb2bb   nginx     "/docker-entrypoint.…"   44 seconds ago   Exited (0) 20 seconds ago             objective_goodall

MacBook-Pro-2:apiproxy wangxu$ docker run -d nginx
9cfb02db055ef4b05e3eb60eed0a0d3f4dd846f8aedf5973a9ecf26b3ad63c91

MacBook-Pro-2:apiproxy wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                      PORTS     NAMES
9cfb02db055e   nginx     "/docker-entrypoint.…"   6 seconds ago        Up 5 seconds                80/tcp    tender_mclaren
12f3e6edb2bb   nginx     "/docker-entrypoint.…"   About a minute ago   Exited (0) 45 seconds ago             objective_goodall

MacBook-Pro-2:apiproxy wangxu$ docker stop tender_mclaren
tender_mclaren

MacBook-Pro-2:apiproxy wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                          PORTS     NAMES
9cfb02db055e   nginx     "/docker-entrypoint.…"   52 seconds ago       Exited (0) 7 seconds ago                  tender_mclaren
12f3e6edb2bb   nginx     "/docker-entrypoint.…"   About a minute ago   Exited (0) About a minute ago             objective_goodall

MacBook-Pro-2:apiproxy wangxu$ docker start tender_mclaren
tender_mclaren

MacBook-Pro-2:apiproxy wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                     PORTS     NAMES
9cfb02db055e   nginx     "/docker-entrypoint.…"   About a minute ago   Up 4 seconds               80/tcp    tender_mclaren
12f3e6edb2bb   nginx     "/docker-entrypoint.…"   2 minutes ago        Exited (0) 2 minutes ago             objective_goodall

MacBook-Pro-2:apiproxy wangxu$ docker stop tender_mclaren
tender_mclaren

MacBook-Pro-2:apiproxy wangxu$ docker rm $(docker container ls -aq)
9cfb02db055e
12f3e6edb2bb

MacBook-Pro-2:apiproxy wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

MacBook-Pro-2:apiproxy wangxu$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
nginx        latest    9c1ff20ac9c9   6 days ago   134MB

MacBook-Pro-2:apiproxy wangxu$ docker rmi  9c
Untagged: nginx:latest
Untagged: nginx@sha256:1c13bc6de5dfca749c377974146ac05256791ca2fe1979fc8e8278bf0121d285
Deleted: sha256:9c1ff20ac9c94dd5175ea7395ed94f259f7a9c804af9312022cb95b2fcf36367
Deleted: sha256:c0672bb6f00fab41504c93ff2bf5d030cb32422bbd4a447046ebb9a66150ec8a
Deleted: sha256:abefcde7649be3e1c8217eb1b65cf0546da51cb7e32db17a0c4f0a6a3c0c6918
Deleted: sha256:0f0cbdccb38c3536f3dcb500171ef9ee0e55e869f8db8b51a792ab7b398a9e01
Deleted: sha256:7fd3f181e6f8099e4dd631d17fe371801691d46a949551fcba4c866b854dfbfb
Deleted: sha256:1f90b81070395a47995dfee2a8e055da3871ded2fab037129b40442d46678c4b
Deleted: sha256:5089aa3c97a8aebeac8ad0cb2d089f8e7e487f0299a248f34cf46ab86a1a356d

MacBook-Pro-2:apiproxy wangxu$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
MacBook-Pro-2:apiproxy wangxu$

```

### 3.2. Docker Compose


#### 3.2.1. directus的 docker-compose.yaml

```
version: '3'
services:
  database:
    container_name: database
    image: postgis/postgis:13-master
    volumes:
      - ./data/database:/var/lib/postgresql/data
    networks:
      - directus
    environment:
      POSTGRES_USER: 'directus'
      POSTGRES_PASSWORD: 'directus'
      POSTGRES_DB: 'directus'

  cache:
    container_name: cache
    image: redis:6
    networks:
      - directus

  directus:
    container_name: directus
    image: directus/directus:latest
    ports:
      - 8055:8055
    volumes:
      # By default, uploads are stored in /directus/uploads
      # Always make sure your volumes matches the storage root when using
      # local driver
      - ./uploads:/directus/uploads
      # Make sure to also mount the volume when using SQLite
      # - ./database:/directus/database
      # If you want to load extensions from the host
      # - ./extensions:/directus/extensions
    networks:
      - directus
    depends_on:
      - cache
      - database
    environment:
      KEY: '255d861b-5ea1-5996-9aa3-922530ec40b1'
      SECRET: '6116487b-cda1-52c2-b5b5-c8022c45e263'

      DB_CLIENT: 'pg'
      DB_HOST: 'database'
      DB_PORT: '5432'
      DB_DATABASE: 'directus'
      DB_USER: 'directus'
      DB_PASSWORD: 'directus'

      CACHE_ENABLED: 'true'
      CACHE_STORE: 'redis'
      CACHE_REDIS: 'redis://cache:6379'

      ADMIN_EMAIL: 'admin@example.com'
      ADMIN_PASSWORD: 'd1r3ctu5'

      # Make sure to set this in production
      # (see https://docs.directus.io/configuration/config-options/#general)
      # PUBLIC_URL: 'https://directus.example.com'

networks:
  directus:
```


#### 3.2.2. 基本操作

```
MacBook-Pro-2:docker wangxu$ docker-compose up -d
Docker Compose is now in the Docker CLI, try `docker compose up`

Creating network "docker_directus" with the default driver
Creating database ... done
Creating cache    ... done
Creating directus ... done

MacBook-Pro-2:docker wangxu$ docker ps -a
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS          PORTS                                       NAMES
8406414e46ee   directus/directus:latest    "docker-entrypoint.s…"   13 seconds ago   Up 10 seconds   0.0.0.0:8055->8055/tcp, :::8055->8055/tcp   directus
de6b976608a6   postgis/postgis:13-master   "docker-entrypoint.s…"   16 seconds ago   Up 13 seconds   5432/tcp                                    database
566013da3d6c   redis:6                     "docker-entrypoint.s…"   16 seconds ago   Up 13 seconds   6379/tcp                                    cache

MacBook-Pro-2:docker wangxu$ docker-compose down
Stopping directus ... done
Stopping database ... done
Stopping cache    ... done
Removing directus ... done
Removing database ... done
Removing cache    ... done
Removing network docker_directus
MacBook-Pro-2:docker wangxu$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
MacBook-Pro-2:docker wangxu$
```