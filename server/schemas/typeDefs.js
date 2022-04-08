const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    password: String
    vaccine: [Vaccines]
    clinic: [Clinic]
  }

  type Clinic {
    _id: ID
    clinicname: String
    primaryDoctor: String
    phoneNumber: String
  }

  type Vaccines {
    _id: ID
    vaccineName: String
    clinic: String
    administeredDate: String
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    clinics(_id: ID!): Clinic
    vaccine: Vaccines
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addClinic(
      username: String
      clinicname: String
      primaryDoctor: String
      phoneNumber: String
    ): User

    addVaccine(
      vaccineName: String
      administeredDate: String
      location: String
    ): Vaccines
  }
`;

module.exports = typeDefs;
