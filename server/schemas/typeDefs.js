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
  type Vaccines {
    vaccineName: String
    clinic: string
  }

  type Query {
    user(username: String): User
    clinics(username: String): Clinic
    clinic(_id: ID!): Clinic
  }
`;

module.exports = typeDefs;
