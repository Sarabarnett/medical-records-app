const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
  }

  type Clinic {
    _id: ID
    clinicName: String
    primaryDoctor: String
    phoneNumber: Int
  }

  type Vaccines {
    vaccineName: String
    clinic: String
  }

  type Query {
    user: User
    clinics(username: String): Clinic
    clinic(_id: ID!): Clinic
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
