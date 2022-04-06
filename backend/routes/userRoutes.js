const express = require("express");
const router = express.Router();
const passport = require("passport");
const { loginJWT, registerJWT } = require("../controllers/userController");
const User = require("../models/userModel");

// Check for signed in user
router.get("/login/success", async (req, res) => {
    console.log(req.user);
    if (req.user) {
        const user = await User.findById(req.user._id);
        req.user = user;

        res.status(200).json({
            success: true,
            message: "successful login",
            user: req.user,
            // cookies: req.cookies
            // jwt here
        });
    } else {
        res.status(401).json({
            success: false,
            message: "fail to login",
        });
    }
});

// Google Auth routes
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "fail to login",
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000/",
        failureRedirect: process.env.CLIENT_URL + "/auth/login",
    })
);

// JWT Auth Routes

router.post("/signin", loginJWT);
router.post("/signup", registerJWT);

module.exports = router;
