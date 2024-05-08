# Coding challenge user manager API

This is the code implementation for the challenge [(en)](./CHALLENGE.MD)/ [(pt)](./DESAFIO.MD)
For thsi challenge, we will create a simple user manager API using Node.js/TypeScript, Nest.js Framework, Express, Docker/Docker-compose and MySQL.


## Prerequisites for the development environment

 - docker
 - docker-compose
 - node
 - npm
 - nest.js
    ```bash
    npm i -g @nestjs/cli
    ```

## Steps to create the application

 -  Create a new Nest.js project

```bash
nest new user-manager-api
```

 -  Install the dependencies

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```


to run a mysql local in docker
```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=user_manager -p 3306:3306 -d migs/mysql-5.7 
```

## Run the System
We can easily run the whole with only a single command:
```bash
docker compose up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker compose up -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker compose down
```
