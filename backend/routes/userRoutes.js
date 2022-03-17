const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if (req.user) {
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
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: process.env.CLIENT_URL + "/auth/login",
    })
);

module.exports = router;
