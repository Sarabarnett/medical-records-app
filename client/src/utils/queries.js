import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
    }
  }
`;

export const GET_CLINICS = gql`
  query clinics($username: String) {
    clinics(username: $username) {
      clinicname
      _id
      primaryDoctor
      phoneNumber: Int
    }
  }
`;

export const GET_VACCINES = gql`
  query vaccine($username: String) {
    vaccine(username: $username) {
      vaccineName
      clinic
      adimisteredDate
      location
    }
  }
`;
