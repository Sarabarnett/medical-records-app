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