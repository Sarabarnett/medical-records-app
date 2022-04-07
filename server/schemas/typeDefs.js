const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    vaccine: [Vaccine]
    clinics: [Clinic]
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
    clinicname: String
    primaryDoctor: String
    phoneNumber: Int
  }

  type Vaccines {
 vaccineName: String
 administeredDate: String
 location: String
  }


  type Auth{
    token: ID
    user: User
  }
  


  type Query {
    user: User
    clinics(_id: ID!): Clinic
    me: User
    getVaccine: Vaccines
  }

  type Mutation{
    login(email: String, password: String): Auth
    addUser(username: String!, email: String, password: String!): Auth
    addClinic(clinicName: String, primaryDoctor: String, phoneNumber: Int):User
  addVaccine:(vaccineName: String, administeredDate: String)
  }
  

`;

module.exports = typeDefs;
