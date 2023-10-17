# APIs e Webservices - TP1 - Implementação API

Nome: Wager Cipriano - 993540

Pos-graduação Especialização em Engenharia de Software - PucMG - AWS - Atividade Prática - API GraphQL

## How to configure Local Deploy

1. Clone project:
   `git clone git@github.com:wcipriano/pos-es-api-graphql-1.git`
2. Open project folder:
   `pos-es-api-graphql-1`
3. Create `.env` file and put key: `PORT=4334`
4. Install node, npm and nvm (if necessary): [link](https://medium.com/@iam_vinojan/how-to-install-node-js-and-npm-using-node-version-manager-nvm-143165b16ce1)

5. Install packages: `npm install`
6. Run the application: `npm run dev`

## Test

### REQ:

```
curl -X POST http://localhost:4000/graphql -H "Content-Type: application/json" -d '{"query": "{ customers { id, name } }"}'
```

### RES:

```json
{
  "data": {
    "customers": [
      { "id": "1", "name": "Michael Jackson" },
      { "id": "1", "name": "Madona Isla Bonita" }
    ]
  }
}
```

### Config js

"javascript.validate.enable": false,
