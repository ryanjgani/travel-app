require("dotenv").config();
const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const port = process.env.PORT || 8000;
require("./auth/passport");

connectDB();

const app = express();
// app.use(cors());
app.use(
    cors({
        credentials: true,
        // origin: "https://travel-app-mern.herokuapp.com/",
        origin: [process.env.CLIENT_URL_DEV, process.env.CLIENT_URL_PROD],
        // client URL
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cookieSession({
        name: "session",
        keys: ["travelapp"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Travel App Backend API");
});
app.use("/api/dest", require("./routes/destRoutes"));
app.use("/auth", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
