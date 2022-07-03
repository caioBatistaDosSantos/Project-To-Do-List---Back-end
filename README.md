# Boas Vindas ao Project-To-Do-List---Back-end

Este Projeto foi criado com o intuito de fornecer um back-end ao projeto: (link do projet front)
Com uma arquitetura de camadas MSC (model, service e controller), um banco de dados relacional Mysql e com rotas para fazer um CRUD de uma lista de tarefas, e tambem com uma cobertura de testes com Jest, Mocha e Chai

## Como rodar...
  
  => Localmente:
  ---
    Para rodar este projeto localmente você vai precisar ter instalado o Docker, GitHub, Node e um gerenciador de banco de dados, e basta seguir o passo a passo abaixo.
    1. Clone o repositório com o comando:
    - `git clone git@github.com:caioBatistaDosSantos/Project-To-Do-List---Back-end.git`;
    - Entre na pasta do repositório:
    - `cd Project-To-Do-List---Back-end`
    2. Instale as dependencia com o comando:
    - `npm install`
    3. Suba o container Docker com o comando:
    - `docker-compose up -d` (este comando inicializará um container com a API back chamada: <strong>to_do_back</strong> e o banco de dados <strong>to_do_db</strong>)
    4. Entre no container para subir a aplicação com o comando:
    - `docker exec -it to_do_back bash`
    5. Se conecte a um gerenciador de banco de dados (ex: mysql workbench), seguindo a informações de usuario, senha, host e porta do docker-compose.
    6. Suba o banco de dados com o comando:
    - `npm run prestart` (este comando deve ser realizado dentro do terminal criado pelo docker-compose; irá criar o banco de dados e tabelas).
    7. Por fim inicie a aplicação com o comando:
    - `npm start` (este comando tambem deve ser realizado dentro do terminal criado pelo docker-compose)
  
  => Deploy:
  ---
    Se preferir, essa aplicação tambem esta online por um deploy feito no Heroku: https://to-do-list-back-dev-caio.herokuapp.com
    - Obs: a aplicação fornece apenas alnguns logs a cada hora, devido utilizar um banco de dados online.
    
 ## Sobre as Rotas
 
 Este projeto contêm 4 rotas para realizar o CRUD completo do banco, sendo elas:
 
   ---
   
   1. Rota GET "/list": lista todas as tarefas do banco
   
   ---
   
   2. Rota POST "/list": cria uma nova tarefa e adiciona ao banco.
     - Essa rota precisa de um objeto com as chaves "task" (string e minimo de 10 caracteres) e "status" (string e minimo de 5 caracteres)
   
   ---
   
   3. Rota PUT "/list/:id": altera a tarefa pelo id disponibilizado na rota.
     - Essa rota, como a POST, precisa de um objeto com as chaves "task" (string e minimo de 10 caracteres) e "status" (string e minimo de 5 caracteres), alem do id da tarefa a ser alterada na rota.
     - Exemplo "/list/1": irá alterar a tarefa com o id igual a 1.
   
   ---
   
   4. Rota DELETE "/list/:id": deleta a tarefa pelo id disponibilizado na rota.
     - Exemplo "/list/1": irá deletar a tarefa com o id igual a 1.
   
   ---

 
 ## Tecnologias utilizadas...
    Para este projeto utilizei:
    - Node
    - Express
    - Docker
    - Sequelize (para criar e gerenciar o banco)
    - Mysql (banco de dados)
    - Joi (para validar as regras de negócio)
    - Eslint (para um codigo mais limpo)
    - Jest, Mocha, Chai e Sinon (testes)
 
 ## Testando a aplicação...
 
   => Os testes ainda estão em desenvolvimentos, mas para testar a aplicação, basta seguir os dois primeiros passos da seção "Rodando Locamente" neste Readme e depois rodar o comando:
     - `npm test`
     - Se preferir, para averiguar a cobertura dos testes, basta rodar: `npm run test-coverage`
 
 ## Feedback são bem-vindos!!
 
   Se Possivel, deixe seu feedback ou seu code-review! Muito Obrigado! :)🤝🛠 
   Linkedin: https://www.linkedin.com/in/caio-batista-dos-santos/
   Gmail: drcaiosan@gmail.com
