import{_ as s,o as a,c as n,V as p}from"./chunks/framework.vw966T_F.js";const i="/assets/1646728842198.q6PVNF_h.png",e="/assets/1646933884014.HxA5a9g-.png",y=JSON.parse('{"title":"Docker","description":"","frontmatter":{"title":"Docker","subtitle":"Docker & Docker Compose","date":"2022-03-08T00:00:00.000Z","author":"awis.me","header-img":"img/docker.jpg","tags":["Docker","Directus","随时更新"]},"headers":[],"relativePath":"posts/2022-03-06-docker-directus.md","filePath":"posts/2022-03-06-docker-directus.md"}'),l={name:"posts/2022-03-06-docker-directus.md"},t=p('<h2 id="_1-docker" tabindex="-1">1. Docker <a class="header-anchor" href="#_1-docker" aria-label="Permalink to &quot;1. Docker&quot;">​</a></h2><p><img src="'+i+'" alt="picture 1"></p><p>client通过运行在主机上的docker daemon操作image和container，registry提供image的发布和下载（类似npm和pip）。</p><p>Docker 镜像是一个特殊的只读文件系统，提供容器运行时所需的程序、库、资源、配置等文件，还包含一些为运行时准备的配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。</p><p>Container是image的运行实例，是运行在宿主机上的一种特殊的进程。一个image可以有多个container。</p><p><img src="'+e+`" alt="picture 2"></p><blockquote><p>Container是在Image基础上叠加了一个读写层，在container内部做一些写操作后，可以commit读写层生成新的image</p><p>上图省略掉了存储配置文件信息的init层。init层位于上图image和container两层之间。存放运行操作系统时候需要写的一些目录/文件。例如/etc 目录。init层commit时候不提交。 因为没必要，每次只读层运行时候都会自动生成init层内容。</p></blockquote><h3 id="_1-1-commands" tabindex="-1">1.1. commands <a class="header-anchor" href="#_1-1-commands" aria-label="Permalink to &quot;1.1. commands&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># Image</span></span>
<span class="line"><span>docker pull hello-world   从registry下载hello-world image</span></span>
<span class="line"><span>docker images             查看本地有哪些image</span></span>
<span class="line"><span>docker rmi  &lt;IMAGE ID&gt;    删除某个image，可以只写ID的前几位</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Container</span></span>
<span class="line"><span>docker ps -a              查看有哪些container</span></span>
<span class="line"><span>docker run -it centos     交互式运行</span></span>
<span class="line"><span>docker run -d flask-hello-world  后台运行</span></span>
<span class="line"><span>docker start &lt;container_name&gt;   重启</span></span>
<span class="line"><span>docker rm &lt;CONTAINER ID&gt;    删除container</span></span>
<span class="line"><span>docker rm $(docker container ls -aq)   删除所有container</span></span>
<span class="line"><span>docker port &lt;CONTAINER ID&gt;  查看端口映射信息</span></span>
<span class="line"><span>docker cp local_file_name  49f7960eb7e4:/docker_file_name  拷贝文件到docker里面</span></span>
<span class="line"><span>docker attach &lt;container name&gt;  对于docker run/start 启动的容器，可以用这个来attach到控制台上看输出。</span></span>
<span class="line"><span>docker exec -it  directus-sqlite /bin/sh  在名字是 directus-sqlite的容器内执行sh</span></span></code></pre></div><h3 id="_1-2-dockerfile" tabindex="-1">1.2. Dockerfile <a class="header-anchor" href="#_1-2-dockerfile" aria-label="Permalink to &quot;1.2. Dockerfile&quot;">​</a></h3><p>是用来build image的配置文件，从一个基础image开始，运行一些列配置命令，得到另外一个image</p><h2 id="_2-docker-compose" tabindex="-1">2. Docker Compose <a class="header-anchor" href="#_2-docker-compose" aria-label="Permalink to &quot;2. Docker Compose&quot;">​</a></h2><p>一个用于定义，运行和管理多容器的工具. 运行起来之后，也可以用之前的docker命令来操作容器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker-compose up</span></span>
<span class="line"><span>docker-compose up -d  // 后台启动并运行容器</span></span>
<span class="line"><span>docker-compose ps</span></span>
<span class="line"><span>docker-compose logs  //查看几个服务各自的log</span></span>
<span class="line"><span>docker-compose port directus 8055   //查看directus服务的container 8055端口绑定到主机的哪个端口了</span></span>
<span class="line"><span>docker-compose start cache</span></span>
<span class="line"><span>docker-compose stop cache</span></span>
<span class="line"><span>docker-compose run directus sh   //在directus服务的container上运行sh</span></span>
<span class="line"><span>docker-compose down  //停止所有服务，并删除container</span></span></code></pre></div><h2 id="_3-examples" tabindex="-1">3. Examples <a class="header-anchor" href="#_3-examples" aria-label="Permalink to &quot;3. Examples&quot;">​</a></h2><h3 id="_3-1-docker" tabindex="-1">3.1. Docker <a class="header-anchor" href="#_3-1-docker" aria-label="Permalink to &quot;3.1. Docker&quot;">​</a></h3><h4 id="_3-1-1-directus" tabindex="-1">3.1.1. directus <a class="header-anchor" href="#_3-1-1-directus" aria-label="Permalink to &quot;3.1.1. directus&quot;">​</a></h4><p>以下映射了两个卷，读取环境变量，然后交互式运行directus，container名字为directus-sqlite。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -it --env-file=./env_sqlite  -v $PWD/:/directus/database -v $PWD/uploads:/directus/uploads --name=&quot;directus-sqlite&quot; directus/directus:latest</span></span></code></pre></div><p>其中环境变量文件 env_sqlite</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_CLIENT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sqlite3&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_FILENAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/directus/database/data.db&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RATE_LIMITER_ENABLED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RATE_LIMITER_POINTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RATE_LIMITER_DURATION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RATE_LIMITER_STORE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">memory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CACHE_ENABLED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CACHE_TTL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;30m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CACHE_NAMESPACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;directus-cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CACHE_AUTO_PURGE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># memory | redis | memcache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CACHE_STORE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">memory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ASSETS_CACHE_TTL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;30m&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">STORAGE_LOCATIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">STORAGE_LOCAL_DRIVER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">STORAGE_LOCAL_ROOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/directus/uploads&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxxxxx-xxxxxx-xxxxxxxx-xxxxxxxxxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SECRET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abcdef&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ACCESS_TOKEN_TTL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15m&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REFRESH_TOKEN_TTL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7d&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REFRESH_TOKEN_COOKIE_SECURE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REFRESH_TOKEN_COOKIE_SAME_SITE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lax&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REFRESH_TOKEN_COOKIE_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;directus_refresh_token&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_ENABLED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_ORIGIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_METHODS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GET,POST,PATCH,DELETE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_ALLOWED_HEADERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Content-Type,Authorization</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_EXPOSED_HEADERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Content-Range</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_CREDENTIALS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS_MAX_AGE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_PROVIDERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dingtalk&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_DRIVER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oauth2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_CLIENT_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;....&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_CLIENT_SECRET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c6rCTM1nmIm-....&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_AUTHORIZE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fb.....cn/apipro/oauth_dingtalk/auth&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_ACCESS_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fb.....cn/apipro/oauth_dingtalk/access_token&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_PROFILE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fb.....cn/apipro/oauth_dingtalk/profile&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_ALLOW_PUBLIC_REGISTRATION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_DEFAULT_ROLE_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;86a3338c-26a5-447d-bfbd-f938ee2c3c40&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_DINGTALK_ICON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alipay&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXTENSIONS_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./extensions&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_FROM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;austin@....com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_TRANSPORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;smtp&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_POOL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;smtp........com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">465</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_SECURE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Use TLS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_IGNORE_TLS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;austin@....com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EMAIL_SMTP_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;....&quot;</span></span></code></pre></div><p>后续就可以用docker start来启动directus。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MacBook-Pro-2:api wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE                      COMMAND                  CREATED         STATUS                     PORTS     NAMES</span></span>
<span class="line"><span>78acc6c46440   directus/directus:latest   &quot;docker-entrypoint.s…&quot;   6 minutes ago   Exited (1) 5 minutes ago             directus-sqlite</span></span>
<span class="line"><span>MacBook-Pro-2:api wangxu$ docker start directus-sqlite</span></span>
<span class="line"><span>directus-sqlite</span></span>
<span class="line"><span>MacBook-Pro-2:api wangxu$</span></span></code></pre></div><h4 id="_3-1-2-基本操作" tabindex="-1">3.1.2. 基本操作 <a class="header-anchor" href="#_3-1-2-基本操作" aria-label="Permalink to &quot;3.1.2. 基本操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker images</span></span>
<span class="line"><span>REPOSITORY   TAG       IMAGE ID   CREATED   SIZE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker pull nginx</span></span>
<span class="line"><span>Using default tag: latest</span></span>
<span class="line"><span>latest: Pulling from library/nginx</span></span>
<span class="line"><span>279a020076a7: Pull complete</span></span>
<span class="line"><span>ef0e42ecde96: Pull complete</span></span>
<span class="line"><span>5b148f48f52e: Pull complete</span></span>
<span class="line"><span>5596027e469a: Pull complete</span></span>
<span class="line"><span>a7c9963870b9: Pull complete</span></span>
<span class="line"><span>efce21e16a59: Pull complete</span></span>
<span class="line"><span>Digest: sha256:1c13bc6de5dfca749c377974146ac05256791ca2fe1979fc8e8278bf0121d285</span></span>
<span class="line"><span>Status: Downloaded newer image for nginx:latest</span></span>
<span class="line"><span>docker.io/library/nginx:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker images</span></span>
<span class="line"><span>REPOSITORY   TAG       IMAGE ID       CREATED      SIZE</span></span>
<span class="line"><span>nginx        latest    9c1ff20ac9c9   6 days ago   134MB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker run -it nginx</span></span>
<span class="line"><span>/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration</span></span>
<span class="line"><span>/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/</span></span>
<span class="line"><span>/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh</span></span>
<span class="line"><span>10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span>10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span>/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh</span></span>
<span class="line"><span>/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh</span></span>
<span class="line"><span>/docker-entrypoint.sh: Configuration complete; ready for start up</span></span>
<span class="line"><span>2022/03/08 08:55:20 [notice] 1#1: using the &quot;epoll&quot; event method</span></span>
<span class="line"><span>2022/03/08 08:55:20 [notice] 1#1: nginx/1.21.6</span></span>
<span class="line"><span>2022/03/08 08:55:20 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>^C2022/03/08 08:55:43 [notice] 1#1: signal 2 (SIGINT) received, exiting</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 32#32: signal 2 (SIGINT) received, exiting</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 31#31: signal 2 (SIGINT) received, exiting</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 32#32: exiting</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 31#31: exiting</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 32#32: exit</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 31#31: exit</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: signal 17 (SIGCHLD) received from 31</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: worker process 31 exited with code 0</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: signal 29 (SIGIO) received</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: signal 17 (SIGCHLD) received from 32</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: worker process 32 exited with code 0</span></span>
<span class="line"><span>2022/03/08 08:55:43 [notice] 1#1: exit</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES</span></span>
<span class="line"><span>12f3e6edb2bb   nginx     &quot;/docker-entrypoint.…&quot;   44 seconds ago   Exited (0) 20 seconds ago             objective_goodall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker run -d nginx</span></span>
<span class="line"><span>9cfb02db055ef4b05e3eb60eed0a0d3f4dd846f8aedf5973a9ecf26b3ad63c91</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                      PORTS     NAMES</span></span>
<span class="line"><span>9cfb02db055e   nginx     &quot;/docker-entrypoint.…&quot;   6 seconds ago        Up 5 seconds                80/tcp    tender_mclaren</span></span>
<span class="line"><span>12f3e6edb2bb   nginx     &quot;/docker-entrypoint.…&quot;   About a minute ago   Exited (0) 45 seconds ago             objective_goodall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker stop tender_mclaren</span></span>
<span class="line"><span>tender_mclaren</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                          PORTS     NAMES</span></span>
<span class="line"><span>9cfb02db055e   nginx     &quot;/docker-entrypoint.…&quot;   52 seconds ago       Exited (0) 7 seconds ago                  tender_mclaren</span></span>
<span class="line"><span>12f3e6edb2bb   nginx     &quot;/docker-entrypoint.…&quot;   About a minute ago   Exited (0) About a minute ago             objective_goodall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker start tender_mclaren</span></span>
<span class="line"><span>tender_mclaren</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                     PORTS     NAMES</span></span>
<span class="line"><span>9cfb02db055e   nginx     &quot;/docker-entrypoint.…&quot;   About a minute ago   Up 4 seconds               80/tcp    tender_mclaren</span></span>
<span class="line"><span>12f3e6edb2bb   nginx     &quot;/docker-entrypoint.…&quot;   2 minutes ago        Exited (0) 2 minutes ago             objective_goodall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker stop tender_mclaren</span></span>
<span class="line"><span>tender_mclaren</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker rm $(docker container ls -aq)</span></span>
<span class="line"><span>9cfb02db055e</span></span>
<span class="line"><span>12f3e6edb2bb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker images</span></span>
<span class="line"><span>REPOSITORY   TAG       IMAGE ID       CREATED      SIZE</span></span>
<span class="line"><span>nginx        latest    9c1ff20ac9c9   6 days ago   134MB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker rmi  9c</span></span>
<span class="line"><span>Untagged: nginx:latest</span></span>
<span class="line"><span>Untagged: nginx@sha256:1c13bc6de5dfca749c377974146ac05256791ca2fe1979fc8e8278bf0121d285</span></span>
<span class="line"><span>Deleted: sha256:9c1ff20ac9c94dd5175ea7395ed94f259f7a9c804af9312022cb95b2fcf36367</span></span>
<span class="line"><span>Deleted: sha256:c0672bb6f00fab41504c93ff2bf5d030cb32422bbd4a447046ebb9a66150ec8a</span></span>
<span class="line"><span>Deleted: sha256:abefcde7649be3e1c8217eb1b65cf0546da51cb7e32db17a0c4f0a6a3c0c6918</span></span>
<span class="line"><span>Deleted: sha256:0f0cbdccb38c3536f3dcb500171ef9ee0e55e869f8db8b51a792ab7b398a9e01</span></span>
<span class="line"><span>Deleted: sha256:7fd3f181e6f8099e4dd631d17fe371801691d46a949551fcba4c866b854dfbfb</span></span>
<span class="line"><span>Deleted: sha256:1f90b81070395a47995dfee2a8e055da3871ded2fab037129b40442d46678c4b</span></span>
<span class="line"><span>Deleted: sha256:5089aa3c97a8aebeac8ad0cb2d089f8e7e487f0299a248f34cf46ab86a1a356d</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$ docker images</span></span>
<span class="line"><span>REPOSITORY   TAG       IMAGE ID   CREATED   SIZE</span></span>
<span class="line"><span>MacBook-Pro-2:apiproxy wangxu$</span></span></code></pre></div><h3 id="_3-2-docker-compose" tabindex="-1">3.2. Docker Compose <a class="header-anchor" href="#_3-2-docker-compose" aria-label="Permalink to &quot;3.2. Docker Compose&quot;">​</a></h3><h4 id="_3-2-1-directus的-docker-compose-yaml" tabindex="-1">3.2.1. directus的 docker-compose.yaml <a class="header-anchor" href="#_3-2-1-directus的-docker-compose-yaml" aria-label="Permalink to &quot;3.2.1. directus的 docker-compose.yaml&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  database:</span></span>
<span class="line"><span>    container_name: database</span></span>
<span class="line"><span>    image: postgis/postgis:13-master</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./data/database:/var/lib/postgresql/data</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - directus</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      POSTGRES_USER: &#39;directus&#39;</span></span>
<span class="line"><span>      POSTGRES_PASSWORD: &#39;directus&#39;</span></span>
<span class="line"><span>      POSTGRES_DB: &#39;directus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  cache:</span></span>
<span class="line"><span>    container_name: cache</span></span>
<span class="line"><span>    image: redis:6</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - directus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  directus:</span></span>
<span class="line"><span>    container_name: directus</span></span>
<span class="line"><span>    image: directus/directus:latest</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 8055:8055</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      # By default, uploads are stored in /directus/uploads</span></span>
<span class="line"><span>      # Always make sure your volumes matches the storage root when using</span></span>
<span class="line"><span>      # local driver</span></span>
<span class="line"><span>      - ./uploads:/directus/uploads</span></span>
<span class="line"><span>      # Make sure to also mount the volume when using SQLite</span></span>
<span class="line"><span>      # - ./database:/directus/database</span></span>
<span class="line"><span>      # If you want to load extensions from the host</span></span>
<span class="line"><span>      # - ./extensions:/directus/extensions</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - directus</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - cache</span></span>
<span class="line"><span>      - database</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      KEY: &#39;255d861b-5ea1-5996-9aa3-922530ec40b1&#39;</span></span>
<span class="line"><span>      SECRET: &#39;6116487b-cda1-52c2-b5b5-c8022c45e263&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      DB_CLIENT: &#39;pg&#39;</span></span>
<span class="line"><span>      DB_HOST: &#39;database&#39;</span></span>
<span class="line"><span>      DB_PORT: &#39;5432&#39;</span></span>
<span class="line"><span>      DB_DATABASE: &#39;directus&#39;</span></span>
<span class="line"><span>      DB_USER: &#39;directus&#39;</span></span>
<span class="line"><span>      DB_PASSWORD: &#39;directus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      CACHE_ENABLED: &#39;true&#39;</span></span>
<span class="line"><span>      CACHE_STORE: &#39;redis&#39;</span></span>
<span class="line"><span>      CACHE_REDIS: &#39;redis://cache:6379&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      ADMIN_EMAIL: &#39;admin@example.com&#39;</span></span>
<span class="line"><span>      ADMIN_PASSWORD: &#39;d1r3ctu5&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # Make sure to set this in production</span></span>
<span class="line"><span>      # (see https://docs.directus.io/configuration/config-options/#general)</span></span>
<span class="line"><span>      # PUBLIC_URL: &#39;https://directus.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  directus:</span></span></code></pre></div><h4 id="_3-2-2-基本操作" tabindex="-1">3.2.2. 基本操作 <a class="header-anchor" href="#_3-2-2-基本操作" aria-label="Permalink to &quot;3.2.2. 基本操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MacBook-Pro-2:docker wangxu$ docker-compose up -d</span></span>
<span class="line"><span>Docker Compose is now in the Docker CLI, try \`docker compose up\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Creating network &quot;docker_directus&quot; with the default driver</span></span>
<span class="line"><span>Creating database ... done</span></span>
<span class="line"><span>Creating cache    ... done</span></span>
<span class="line"><span>Creating directus ... done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:docker wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS          PORTS                                       NAMES</span></span>
<span class="line"><span>8406414e46ee   directus/directus:latest    &quot;docker-entrypoint.s…&quot;   13 seconds ago   Up 10 seconds   0.0.0.0:8055-&gt;8055/tcp, :::8055-&gt;8055/tcp   directus</span></span>
<span class="line"><span>de6b976608a6   postgis/postgis:13-master   &quot;docker-entrypoint.s…&quot;   16 seconds ago   Up 13 seconds   5432/tcp                                    database</span></span>
<span class="line"><span>566013da3d6c   redis:6                     &quot;docker-entrypoint.s…&quot;   16 seconds ago   Up 13 seconds   6379/tcp                                    cache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MacBook-Pro-2:docker wangxu$ docker-compose down</span></span>
<span class="line"><span>Stopping directus ... done</span></span>
<span class="line"><span>Stopping database ... done</span></span>
<span class="line"><span>Stopping cache    ... done</span></span>
<span class="line"><span>Removing directus ... done</span></span>
<span class="line"><span>Removing database ... done</span></span>
<span class="line"><span>Removing cache    ... done</span></span>
<span class="line"><span>Removing network docker_directus</span></span>
<span class="line"><span>MacBook-Pro-2:docker wangxu$ docker ps -a</span></span>
<span class="line"><span>CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES</span></span>
<span class="line"><span>MacBook-Pro-2:docker wangxu$</span></span></code></pre></div>`,30),c=[t];function o(r,k,h,d,E,g){return a(),n("div",null,c)}const A=s(l,[["render",o]]);export{y as __pageData,A as default};
