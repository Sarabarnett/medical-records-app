const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Clinic {
    _id: ID
    clinicName: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String): User
    clinic(_id: ID!): Clinic
  }
  type Mutation
    user(username: String!, email: String!): user
`;

module.exports = typeDefs;
