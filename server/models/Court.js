const { Schema, model } = require("mongoose");

const courtSchema = new Schema({
  player1: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  player2: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  player3: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  },
  player4: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  },
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
});

const Court = model("Court", courtSchema);

module.exports = Court;
