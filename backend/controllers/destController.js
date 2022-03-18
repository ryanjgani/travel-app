const asyncHandler = require("express-async-handler");

const Destination = require("../models/destModel");
const User = require("../models/userModel");
// const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getAllDest = asyncHandler(async (req, res) => {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const getDest = asyncHandler(async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            res.status(400);
            throw new Error("No destination found!");
        }
        res.status(200).json(destination);
    } catch (e) {
        res.status(400);
        throw new Error("No destination found!");
    }
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setDest = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }

    // await destination.save();
    res.status(200).json(destination);
});

const likeDest = asyncHandler(async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        const user = await User.findById(req.user._id);

        if (!destination || !user) {
            res.status(400);
            throw new Error("No destination or user found!");
        }
        if (req.body.addFavorite) {
            destination.likes++;
            user.favorites.push({
                title: destination.title,
                location: destination.location,
                image: destination.image,
                id: destination._id,
            });
            await destination.save();
            await user.save();
        } else {
            destination.likes--;
            await user.updateOne({
                $pull: { favorites: { id: req.params.id } },
            });
        }

        req.user = user;

        res.status(200).json({
            success: true,
            user: req.user,
        });
    } catch (e) {
        res.status(400);
        console.log(e.message);
        throw new Error("No destination found!");
    }
});

module.exports = {
    getAllDest,
    getDest,
    setDest,
    likeDest,
    // updateGoal,
    // deleteGoal,
};
