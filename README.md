# Movies API

### Running locally

- `npm i `  
- Em uma aba, executar o comando `docker-compose -f docker-compose.local.yml up`  
- Em outra aba, executar o comando `npm start`  

- No navegador, após estive executando, acessar o endereço `http://localhost:3002/api/docs/` para ter acesso ao Swagger Documentation


Existem 2 endpoints, sendo:
- endpoint fetch para salvar os 200 filmes e salvar no banco;  
- endpoint para buscar os filmes no banco com paginação.