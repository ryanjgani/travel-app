require("dotenv").config();

const passport = require("passport");
const User = require("../models/userModel");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            // done(null, profile);
            const { name, email } = profile._json;
            const photo = profile.photos[0].value;
            const newUser = {
                name,
                email,
                photo,
            };
            User.findOneAndUpdate(
                { email: email },
                newUser,
                {
                    new: true,
                    upsert: true,
                },
                function (err, user) {
                    return done(err, user);
                }
            );
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
