const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];
            const isCustomAuth = token.length < 500; // token > 0 is Google's auth

            // Verify token
            let decoded;
            if (token && isCustomAuth) {
                // if our JWT auth
                decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = await User.findById(decoded.id).select("-password");
            } else {
                // else Google auth
                decoded = jwt.decode(token);
                req.user = decode?.sub;
            }

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

module.exports = { protect };
