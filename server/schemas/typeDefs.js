const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    password: String
    vaccine: [Vaccines]
    clinics: [Clinic]
  }

  type Clinic {
    _id: ID
    clinicName: String
    primaryDoctor: String
    phoneNumber: String
  }

  type Vaccines {
    _id: ID
    vaccineName: String
    clinic: [Clinic]
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
      clinicName: String
      primaryDoctor: String
      PhoneNumber: String
    ): Clinic

    addVaccine(
      vaccineName: String
      administeredDate: String
      location: String
    ): Vaccines
  }
`;

module.exports = typeDefs;
