<<<<<<< HEAD
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      vaccines
      medicalrecords
      clinics
    }
  }
`;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       vaccines
//       medicalrecords
//       clinics
//     }
//   }
// `;
=======
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
>>>>>>> d13e6e2cc6196933988e70996bce81a6c9a76cdc
