const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photo: { type: String },
    favorites: [
        {
            title: { type: String },
            location: { type: String },
            image: { type: String },
            id: { type: String },
        },
    ],
});

module.exports = mongoose.model("User", userSchema);
