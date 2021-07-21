import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';

dotenv.config();

import typeDefs from './gql/typeDefs.js';
import resolvers from './gql/resolvers/index.js';

// apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.GQL_PORT;
server.listen({port:PORT})
    .then(res=> console.log(`server running on ${res.url}`))
    .catch(err=> console.log(err.message));