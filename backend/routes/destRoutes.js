const express = require("express");
const router = express.Router();
const {
    getAllDest,
    getDest,
    setDest,
    likeDest,
    // updateDest,
    // deleteDest,
} = require("../controllers/destController");

// const { protect } = require('../middleware/authMiddleware')

router.route("/").get(getAllDest).post(setDest);
router.route("/:id").get(getDest).post(likeDest);

// router.route('/').get(protect, getDests).post(protect, setDest)
// router.route('/:id').delete(protect, deleteDest).put(protect, updateDest)

module.exports = router;
