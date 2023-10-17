import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { datab } from "./database.js";

// Config env variables
configDotenv();

const app = express();
const port = process.env.PORT ? process.env.PORT : 4001;

const typeDefs = `
type Customer {
  id: ID!
  name: String!
}

type Query {
  customers: [Customer]
}
`;

const resolvers = {
  Query: {
    customers: (obj, args, context, info) => context.customers,
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: datab,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a GraphQL API server at port ${port}`);
});

/*
curl -X POST http://localhost:4000/graphql -H "Content-Type: application/json" -d '{"query": ""}'
*/
