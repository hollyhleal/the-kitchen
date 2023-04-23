const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  court: {
    type: Schema.Types.ObjectId,
    ref: "Court",
    required: true,
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  date: {
    type: String, 
    required: true,
  },

  // price: {
  //   type: Number,
  //   required: true,
  //   min: 4.99,
  // },
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
