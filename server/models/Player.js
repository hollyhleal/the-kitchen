const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const moment = require("moment");

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 25,
    },
    level: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
      get: (currentYear) => moment(currentYear).format("YYYY"),
    },

    reservations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

playerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

playerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Player = model("Player", playerSchema);

module.exports = Player;
