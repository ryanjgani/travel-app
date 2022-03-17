const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("../config/db");
const Destination = require("../models/destModel");
const { countries } = require("./countries");
const cities = require("cities.json");
const axios = require("axios").default;
const { places, descriptors } = require("./seedHelpers");

connectDB();

// unsplash beaches
// https://source.unsplash.com/collection/3802332/1600x900
// https://source.unsplash.com/featured/1600x900?beach

const imageCollection = [
    "https://source.unsplash.com/featured/1600x900?beach",
    "https://source.unsplash.com/featured/1600x900?mountain",
    "https://source.unsplash.com/featured/1600x900?paradise",
];

const imageUrl = async (url) => {
    const res = await axios.get(url);
    return res.request.res.responseUrl;
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Destination.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 128767);
        const likes = Math.floor(Math.random() * 20);
        const image = await imageUrl(imageCollection[randomNumber % 3]);

        const destination = new Destination({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: {
                city: `${cities[randomNumber].name}`,
                country: `${countries[cities[randomNumber].country].name}`,
            },
            image,
            likes,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[randomNumber].lng,
                    cities[randomNumber].lat,
                ],
            },
        });
        await destination.save();
    }
};

seedDB().then(() => {
    console.log("Database updated");
    mongoose.connection.close();
});

// cities length = 128769
