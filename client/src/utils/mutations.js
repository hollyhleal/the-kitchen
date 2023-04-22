import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($name: String!, $email: String!, $password: String!) {
    addPlayer(name: $name, email: $email, password: $password) {
      token
      player {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_RESERVATION = gql`
mutation addReservation($reservationId: ID!, $playerId: ID!, $courtId: ID!) {
  addReservation(reservationId: $reservationId, playerId: $playerId, courtId: $courtId) {
    court {
      _id
    }
    player {
      _id
    }
    price
    time
  }
}


`
  ;

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
