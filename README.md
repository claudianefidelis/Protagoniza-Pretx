# <p align="center"><b> **PROTAGONIZA PRETX** </b> ✊🏿 <p>
  
## Projeto final para o bootcamp [{Reprograma}](https://www.reprograma.com.br/)
  
### :black_medium_square: Sobre o projeto: 
API desenvolvida para consulta de projetos desenvolvidos por jovens pretos, com o objetivo de levar aos mesmos a visão mais ampla do poder de suas ideias e inspirações em momento importante na construção de autoestima e visão de possibilidades.  
  
  
#### :black_medium_square: Arquitetura:
 ```
 📁 PROTAGONIZA-PRETX
   |
   |--📁 src
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 projetosController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 projetos.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 projetosRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

``` 

#### :black_medium_square: Documentação:
- [Swagger](https://protagoniza-pretx.herokuapp.com/documentation/#/)  
  
#### :black_medium_square: Principais Rotas:  
```
|  Verbo |        EndPoint        |                     Função               | 
| ------ | ---------------------- | -----------------------------------------|
| POST   | /addProjeto            | Cadastrar novo projeto                   | 
| GET    | /projetoslist          | Listar todos os projetos                 |  
| GET    | /projeto/tema          | Buscar projeto por tema                  |   
| GET    | /router.get            | Buscar projeto por estado                |   
| GET    | /projeto/:id           | Buscar projeto por id                    |  
| PATCH  | /updateFormat/:id      | Update de formato buscando por id        |   
| PUT    | /updateProject/:id     | Update de projeto buscando por id        |   
| DELETE | /delete/:id            | Deletar projeto por id                   |  
```   

#### :black_medium_square: Tecnologias:
-  Javascript
-  node.js
-  nodemon
-  npm
-  express
- mongoDB
- mongo Atlas
- heroku
- dotenv-safe
- mongoose
- swagger  

#### :black_medium_square: A desenvolver:
- Autenticação para inclusão e exclusão de projeto
- Testes  
  
  
--------------------  
  
### <p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/claudianefidelis/" target="_blank"><img src="https://img.shields.io/badge/-Claudiane_Fidelis-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/claudianefidelis/" target="_blank"></a> </p>

  
  
