import { gql } from '@apollo/client';
//need to correct strings to correct attribute
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;
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
`;

//add_vaccine, add_xxx, add_xxx
export const ADD_VACCINE = gql`
  mutation addVaccine($Vaccines: String!) {
    addVaccine(Vaccine: $Vaccines) {
      _id
      administeredDate
      vaccineName
      location
    }
  }
`;

export const ADD_CLINIC = gql`
mutation addClinic($username: String, $clinicname: String, $primaryDoctor: String, $phoneNumber: String) {
  addClinic(username: $username, clinicname: $clinicname, primaryDoctor: $primaryDoctor, phoneNumber: $phoneNumber) {
    _id
    username
    email
    password
    clinic {
      clinicname
      primaryDoctor
      phoneNumber
      _id
    }
  }
}
`;

export const ADD_RECORDS = gql`
  mutation addRecords($Records: String!) {
    addRecords(Records: $Records) {
      _id
      createdAt
      username
    }
  }
  `;
