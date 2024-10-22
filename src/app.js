require('./config/dotenv'); 
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/userResolver");

async function startApolloServer() {
  const app = express();
  app.use(cors()); // Enable CORS
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app }); // Apply middleware after server is started
  return app;
}

module.exports = startApolloServer;
