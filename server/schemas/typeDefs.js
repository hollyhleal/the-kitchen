const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Player {
    _id: ID
    name: String!
    email: String!
    password: String!
    level: String!
    reservations: [Reservation]
  }

  type Court {
    player1: Player
    player2: Player
    player3: Player
    player4: Player
    reservations: [Reservation]
  }

  type Reservation {
    court: Court
    player1: Player
    player2: Player
    player3: Player
    player4: Player
    price: Float
  }

  type Auth {
    token: ID!
    player: Player
  }

  type Query {
    player: [Player]
    players: [Player]
    courts: [Court]
    court: [Court]
    reservation: [Reservation]
    me: Player
  }

  type Mutation {
    addPlayer(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removePlayer(playerId: ID!): Player
    addCourt(courtId: ID!): Court
    addReservation(reservationId: ID!, playerId: ID!, courtId: ID!): Reservation
  }
`;

module.exports = typeDefs;
