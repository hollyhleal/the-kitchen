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
  mutation addReservation(
    $courtId: ID!
    $playerId: ID!
    $time: String!
    $date: String!
  ) {
    addReservation(
      courtId: $courtId
      playerId: $playerId
      time: $time
      date: $date
    ) {
      court {
        _id
      }
      player {
        _id
      }
      date
      time
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
