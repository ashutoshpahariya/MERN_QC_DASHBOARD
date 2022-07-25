const express = require("express");
const app = express.Router();

const UserController = require("../controller/userController");



//--------REGISTER API
app.post("/register", UserController.registerUser);



//-----LOGIN API
app.post("/login", UserController.loginUser);
module.exports = app;
