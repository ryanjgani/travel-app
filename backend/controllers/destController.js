const asyncHandler = require("express-async-handler");

const Destination = require("../models/destModel");
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
    // const destination = new Destination({
    //     title: "Valley Creek",
    //     geometry: {
    //         type: "Point",
    //         coordinates: [40.7127837, -74.0059413],
    //     },
    //     location: { city: "Jakarta", country: "Indonesia" },
    //     likes: 21,
    // });

    // await destination.save();
    res.status(200).json(destination);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error("User not found");
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error("User not found");
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    await goal.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getAllDest,
    getDest,
    setDest,
    // updateGoal,
    // deleteGoal,
};
