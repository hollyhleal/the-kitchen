const { AuthenticationError } = require("apollo-server-express");
const { Player, Court, Reservation } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const FRONTEND_DOMAIN = "http://localhost:3001";

//logic for query
const resolvers = {
  Query: {
    players: async () => {
      return Player.find();
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

    reservation: async (parent, { _id }, context) => {
      if (context.player) {
        const player = await Player.findById(context.player._id).populate({
          path: "reservations.courts",
          populate: "reservations",
        });

        return player.reservations.id(_id);
      }
    },

    // CreateCheckoutSession: async () => {
    //   const session = await stripe.checkout.sessions.create({
    //     line_items: [
    //       {
    //         price: "price_1MyzDZAns49T1zFVAz7LwBS5",
    //         quantity: 1,
    //       },
    //     ],
    //     mode: "payment",
    //     success_url: `${YOUR_DOMAIN}?success=true`,
    //     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    //   });

    //   return JSON.stringify({
    //     url: session.url,
    //   });
    // },
  },

  // logic for mutation
  Mutation: {
    addPlayer: async (parent, { name, email, password }) => {
      const player = await Player.create({ name, email, password });
      const token = signToken(player);
      return { token, player };
    },
    login: async (parent, { name, email, password }) => {
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

    addReservation: async (
      parent,
      { playerId, courtId, date, time },
      context
    ) => {
      console.log(context.player);
      console.log(context.court);
      if (context.player && context.court) {
        const reservation = await Reservation.create({
          reservationId,
        });
        await Court.findOneAndUpdate(
          { _id: context.court._id },
          { $addToSet: { reservations: reservation._id } }
        );

        await Player.findOneAndUpdate(
          { _id: context.player._id },
          { $addToSet: { reservations: reservation._id } },
          { new: true }
        );

        return reservation;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
  },
};

module.exports = resolvers;

// CreateCheckoutSession: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const reservation = new Reservation({ court: args.court });
//       const line_items = [
//         {
//           price: "price_1MyzDZAns49T1zFVAz7LwBS5",
//           quantity: 1
//         },
//       ];

//       const price = await stripe.prices.create({
//         reservation: reservation._id,
//         unit_amount: reservation[i].price * 100,
//         currency: "usd",
//       });

//       line_items.push({
//         price: price._id,
//         quantity: 1,
//       });

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items,
//         mode: "payment",
//         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${url}/`,
//       });
//       return { session: session.id };
//     },
