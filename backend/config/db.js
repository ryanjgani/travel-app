require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://ryanjgani:Instagram01@travel-app.2qeyx.mongodb.net/travelapp?retryWrites=true&w=majority"
        );
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
