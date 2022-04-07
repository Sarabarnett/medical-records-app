import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      vaccines {
        vaccineName
        location
        administeredDate
      }
    }
  }
}`;
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
export const GET_ME = gql`
  query Query($username: String) {
    me(username: $username) {
      _id
      username
      email
    }
  }
`;
