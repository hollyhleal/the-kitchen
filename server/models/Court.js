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
    required: true,
  },
  player4: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
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
