const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Player {
    _id: ID
    name: String!
    email: String!
    password: String!
    level: String!
    team: [Team]
    reservations: [Reservation]
  }

  type Team {
    player1: Player
    player2: Player
  }

  type Court {
    team1: Team
    team2: Team
    reservations: [Reservation]
  }

  type Reservation {
    court: Court
    player1: Player
    player2: Player
    price: Float
  }

  type Auth {
    token: ID!
    player: Player
  }

  type Query {
    players: [Player]
    courts: [Court]
    me: Player
    createCheckoutSession: String # '{url: STRIPEURL.com}'
  }

  type Mutation {
    addPlayer(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removePlayer(playerId: ID!): Player
    addCourt(courtId: ID!): Court
    addToTeam(teamId: ID!, playerId: ID!): Team
    addReservation(reservationId: ID!, playerId: ID!, courtId: ID!): Reservation
  }
`;

module.exports = typeDefs;
