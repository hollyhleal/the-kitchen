const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    player1: {
        type: Schema.Types.ObjectId,
        ref: "Player",
        required: true,
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: "Player",
    }
}
);

const Team = model('Team', teamSchema);

module.exports = Team;