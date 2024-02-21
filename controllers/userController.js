const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Gell all Users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();

  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  res.json(users);
});

// @desc Create a User
// @route POST /users
// @access Private
const creatNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  //Confirm data
  if (!username || !password || !Array.isArray(roles) || roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }
});

// @desc update a User
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc updeletedate a User
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  creatNewUser,
  updateUser,
  deleteUser,
};
