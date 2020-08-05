# SERVER

- Rota ou recurso: rota é o endeteço http, recurso apenas a parte final dela;

 Métodos:

- GET: serve para pegar ou listar informação;
- POST: Criar uma nova informação;
- PUT: Atualizar uma inforamção existente;
- DELETE: Deletar uma informação existente;

Há três tipos de parametros:

- Corpo (request body): dados para a criação ou atualização de um registro; 
- Route params: Identificar qual recurso eu quero atualizar ou deletar;
- Query Params: Paginação, filtros, ordenação;

# Funcionalidades

## Conexões

- Rota para Listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;