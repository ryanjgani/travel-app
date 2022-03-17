const mongoose = require("mongoose");

const destSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    location: {
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    likes: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Destination", destSchema);
