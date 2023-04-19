const { Schema, model } = require('mongoose');


const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 25,
    },
    level: {
        type: String,
        required: true,
    },
    team: [
        {
            type: Schema.Types.ObjectId,
            ref: "Team"
        }
    ],
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reservation"
        }
    ]
})

const Player = model('Player', playerSchema);

module.exports = Player;