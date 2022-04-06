import { gql } from "@apollo/client";


export const QUERY_USER = gql`
query user($username: String!) {
  user (username: $username) {
    _id
    username
    email
  }
}
`;


export const GET_CLINICS = gql`
query getclinics($username: String) {
    clinics (username: $username) {
      clinicname
      _id
    }
  }`

  export const GET_ME = gql`
  query Query($username: String) {
    me(username: $username) {
      _id
      username
      email
      vaccine {
        firstDoseProductName
        firstDoseDate
        secondDoseDate
        secondDoseProductName
        firstDoseClinic
        secondDoseClinic
      }
    }
  }`

