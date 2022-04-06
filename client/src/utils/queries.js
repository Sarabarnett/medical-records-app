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

`;

export const GET_ME = gql`

`;