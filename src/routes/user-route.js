const express = require("express");
const { addUser, getAllUsers, getUserById } = require('../controllers/user-controller');
const router = express.Router();

//add one user
router.post("/", addUser);

//getting all users
router.get("/", getAllUsers);

//getting one user by id
router.get("/:name", getUserById);

//editing a user by id

//deleting a user by id


module.exports = router;
