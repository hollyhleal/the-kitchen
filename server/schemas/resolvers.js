const { AuthenticationError } = require("apollo-server-express");
const { Player, Team, Court, Reservation } = require("../models");
const { signToken } = require("../utils/auth");

//logic for query
const resolvers = {
  Query: {
    players: async () => {
      return Player.find().populate("players");
    },
    player: async (parent, { name }) => {
      return Player.findOne({ name }).populate("players");
    },
    courts: async () => {
      return Court.find().populate("courts");
    },
    court: async (parent, { courtId }) => {
      return Court.findOne({ _id: courtId });
    },
    me: async (parent, args, context) => {
      if (context.player) {
        return Player.findOne({ _id: context.player._id }).populate(
          "reservations"
        );
      }
      throw new AuthenticationError(
        "You need to be logged in to see reservations."
      );
    },
  },

  // logic for mutation
  Mutation: {
    addPlayer: async (parent, { name, email, password }) => {
      const player = await Player.create({ name, email, password });
      const token = signToken(player);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const player = await Player.findOne({ email });

      if (!player) {
        throw new AuthenticationError("No player with this email address");
      }

      const correctPw = await player.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(player);

      return { token, player };
    },
    removePlayer: async (parent, { playerId }, context) => {
      if (context.player) {
        const updatePlayer = await Player.findOneAndDelete({
          _id: playerId,
          reservations: context.player.name,
        });

        await Player.findOneAndUpdate(
          { _id: context.player._id },
          { $pull: { reservations: reservation._id } }
        );

        return player;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
    addCourt: async (parent, { courtId }) => {
      const court = await Court.create({ courtId });
    },
    addToTeam: async (parent, { teamId }, context) => {
      if (context.player) {
        const team = await Team.create({
          playerId: context.player._id,
        });

        await Team.findOneAndUpdate(
          { _id: teamId },
          { $addToSet: { players: player._id } }
        );

        return team;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //     addReservation: async(parent { reservationId, playerId, courtId }, context) => {
    // if (context.player) {
    //     const reservation = await Reservation.create({
    //         reservationId
    //     });
    //     await Court.findOneAndUpdate(
    //         { _id: context.court._id },
    //         { $addToSet: { reservations: reservation._id } }
    //     );

    //     await Player.findOneAndUpdate(
    //         { _id: context }
    //     );
    // }
    // }
  },
};

module.exports = resolvers;
