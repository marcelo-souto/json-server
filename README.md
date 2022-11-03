# Json Server
Projeto de criação de uma fake API para utilização em um trabalho futuro para consumo e manipulação.   
Foi desenvolvido utilizando [json-server](https://www.npmjs.com/package/json-server)

## API
Para acessar a API hospedada em um servidor online, acesse [aqui](https://fake-server-company.herokuapp.com/)

## Recursos
- [/products](https://fake-server-company.herokuapp.com/products)
- [/sellers](https://fake-server-company.herokuapp.com/sellers)
- [/users](https://fake-server-company.herokuapp.com/users)

## Rotas Personalizadas
Rotas personalizadas utilizadas para manipulação de informações

method         | path                 | response
---------------|----------------------|---------------
'GET' (see all)| /:recurso/list       | /:recurso
'GET'          | /:recurso/get/:id	  | /:recurso/:id
'POST'         | /:recurso/create     | /:recurso
'PUT/PATCH'    | /:recurso/update/:id | /:recurso/:id
'DELETE'       | /:recurso/delete/:id | /:recurso/:id

## Referências
- [Heroku](https://www.heroku.com/)
- [Dev.to](https://dev.to/youssefzidan/deploying-fake-back-end-server-database-using-json-server-github-and-heroku-1lm4#:~:text=%20Deploying%20Fake%20Back-End%20Server%20%26%20DataBase%20Using,3%20Creating%20the%20server%0ACreate%20account%20on...%20More%20)
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/json-server)
- [Json Server](https://github.com/typicode/json-server)
- [Resilia](https://www.resilia.com.br/)