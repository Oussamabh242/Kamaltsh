import pkg from 'express';
const express = pkg;
import { ApolloServer, gql } from 'apollo-server-express' ; 
import expressSession from 'express-session';
import pool from './_db.js';
import connectPgSimple from 'connect-pg-simple';
import expressSessionPassportCleanup from 'express-session-passport-cleanup';
import passport from 'passport';

//

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
    }},
    context : ({req})=>({req}) 
    
  }); 


  async function startServer() {
    await server.start();

    const app = express();

    //configuring session
    const PgSession = connectPgSimple(expressSession);
    app.use(expressSession({
        store:new PgSession({
            pool : pool ,
            tableName : "session"
        }),
        secret:"oussama.bh",
        resave:false,
        saveUninitialized: false,
        cookie:{ maxAge: 30 * 24 * 60 * 60 * 1000 }

    }));

    // app.use(expressSessionPassportCleanup);
    // app.use(passport.initialize());
    // app.use(passport.session());

    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer().catch(err => {
    console.error('Error starting server:', err);
});

export default expressSession;