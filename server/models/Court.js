const { Schema, model } = require("mongoose");

const courtSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  player1: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: false,
  },
  player2: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: false,
  },
  player3: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: false,
  },
  player4: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: false,
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
