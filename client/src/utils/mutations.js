
import { gql } from '@apollo/client';

//need to correct strings to correct attribute
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//add_vaccine, add_xxx, add_xxx
export const ADD_VACCINE = gql`
  mutation addVaccine($Vaccines: String!) {
    addVaccine(Vaccine: $Vaccine) {
      _id
      createdAt
      username
    }
  }
`;

export const ADD_RECORDS = gql`
  mutation addRecords($Records: String!) {
    mutation addRecords($Records: String!) {
      addRecords(Records: $Records) {
        _id
        createdAt
        username
      }
    }
  `;

export const ADD_CLINIC = gql`
  mutation addClinic($Clinic: String!) {
    mutation addClinic($Clinic: String!) {
      addClinic(Clinic: $Clinic) {
        _id
        createdAt
        username
      }
    }`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
<<<<<<< HEAD
  `;
=======
  `;

// post put delete
import { gql } from "@apollo/client";

export const ADD_VACCINE = gql`
mutation AddVaccine($vaccinedata: VaccineInput, $username: String) {
    addVaccine(vaccinedata: $vaccinedata, username: $username) {
      _id
      username
      email
      vaccine {
        firstDoseProductName
        firstDoseDate
        firstDoseClinic
        secondDoseProductName
        secondDoseDate
        secondDoseClinic
      }
    }
  }`

>>>>>>> develop
