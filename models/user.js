const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Not a valid email format.']
    },
    name: String,
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie', default: []}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;