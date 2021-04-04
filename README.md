###Iniciar o docker-compose setando env-prod
    - docker-compose --env-file=.env-prod up --build -d
    
###Iniciar o docker-compose setando env-dev
    - docker-compose --env-file=.env-dev up --build -d

###Iniciar o docker-compose setando env-test
    - docker-compose --env-file=.env-test up --build -d

###Exibir serviços no docker-compose, setando env-prod
    docker-compose --env-file=.env-prod ps

###Exibir serviços no docker-compose, setando env-dev
    docker-compose --env-file=.env-dev ps

###Exibir serviços no docker-compose, setando env-test
    docker-compose --env-file=.env-test ps

###Executar Create Database
    node_modules/.bin/sequelize db:create

###Executar Migration
    node_modules/.bin/sequelize db:migrate

###Desfazer Migration
    node_modules/.bin/sequelize db:migrate:undo

###Criar Seeders
    node_modules/.bin/sequelize seed:generate --name user

###Executar todos Seeders
    node_modules/.bin/sequelize db:seed:all