import pkg from 'express';
const express = pkg;
import { ApolloServer, gql } from 'apollo-server-express' ; 

import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const isProduction = process.env.NODE_ENV === 'production';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
        "schema.polling.enable": false,
        "request.credentials": "include"
    }}
    
  });


  async function startServer() {
    await server.start();

    const app = express();

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer().catch(err => {
    console.error('Error starting server:', err);
});