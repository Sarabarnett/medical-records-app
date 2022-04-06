const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    vaccine: [Vaccine]
  }

  type Clinic {
    _id: ID
    clinicname: String
    createdAt: String
    username: String
    doctor: String
    phonenumber: String
  }

  type Vaccine {
    firstDoseProductName: String
    firstDoseDate: String
    firstDoseClinic: String
    secondDoseProductName: String
    secondDoseDate: String
    secondDoseClinic: String
  }

  input VaccineInput {
    firstDoseProductName: String
    firstDoseDate: String
    firstDoseClinic: String
    secondDoseProductName: String
    secondDoseDate: String
    secondDoseClinic: String
  }


  type Auth{
    token: ID
    user: User
  }

  type Query {
    me(username: String): User
    clinics(username: String): [Clinic]
    clinic(_id: ID!): Clinic
  }

  type Mutation{
    addUser(username: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
    addClinic(username: String!,clinicname: String!):User
    addVaccine(vaccinedata: VaccineInput, username: String):User
  }
  

`;

module.exports = typeDefs;
