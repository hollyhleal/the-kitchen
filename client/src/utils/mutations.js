import { gql } from "@apollo/client";

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//    {
//     token
//   }
// }
// }
// `;

export const ADD_PLAYER = gql`
  mutation addPlayer(
    $email: String! 
    $password: String!
    ) {
    addPlayer(email: $email
       password: $password
       ) {
        token
      player {
        _id
        email
        
      }
    }
  }
`;

export const REMOVE_PLAYER = gql`
  mutation removeplayer($player: ID!) {
    removeplayer(playerid: $playerid) {
      _id
      name
      email
      players {
        playerid
      }
    }
  }
`;
