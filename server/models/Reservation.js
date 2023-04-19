const { Schema, model } = require('mongoose');

const reservationSchema = new Schema(
    {
    court: {
        type: Schema.Types.ObjectId,
        ref: "Court",
        required: true,
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
    }
    }
);

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;