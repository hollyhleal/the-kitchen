const { Schema, model } = require("mongoose");

const courtSchema = new Schema({
  team1: {
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  team2: {
    type: Schema.Types.ObjectId,
    ref: "Team",
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
