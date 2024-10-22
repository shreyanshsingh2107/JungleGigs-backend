const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    getUsers: [User]
  }

  type User {
    id: ID
    name: String
    email: String
  }
`;

module.exports = typeDefs;
