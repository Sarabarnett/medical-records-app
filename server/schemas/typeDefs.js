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
 vaccineName: String
 administeredDate: String
 location: String
  }

  input VaccineInput {
    vaccineName: String
    administeredDate: String
    location: String


  type Auth{
    token: ID
    user: User
  }

  type Query {
    me(username: String): User
    clinics(username: String): [Clinic]
    clinic(_id: ID!): Clinic
    getVaccine: Vaccine
  }

  type Mutation{
    addUser(username: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
    addClinic(username: String!,clinicname: String!):User
  addVaccine: Vaccine
  }
  

`;

module.exports = typeDefs;
