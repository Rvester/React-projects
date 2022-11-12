const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const mongoConfig = require("./config");

require("dotenv").config();

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
//Register Route
app.post("/register", async (req, res) => {
  try {
    // 1.Check if the user existts
    const foundUser = await User.findOne({ username: req.body.username });
    if (foundUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    //2. If they don't exist, encrypt password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    //3. Add the new user to the database with their encrypted password
    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
    });
    //4. Generate a JWT token and return it to user
    const payload = { id: newUser._id, user: newUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 30 });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//Login Route
app.post("/login", async (req, res) => {
  //1. Check if the user exists
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      return res.status(404).json({ error: "No such user exists" });
    }
    //2. Check if the password provided by the user matches the database password
    //1st arg: plain text password
    //2nd arg: encrypted password
    //return value: boolean (true or false)
    const validPass = bcrypt.compare(req.body.password, foundUser.password);
    if (!validPass) {
      return res.status(403).json({ error: "Invalid credentials" });
    }
    //3. Generate a token and return it to the user
    const payload = { id: foundUser._id, user: foundUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 30 });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {}
});
// app.get("/test", (req, res) => {
//   res.status(200).json({ msg: "Hello" });
// });

// app.post("/test2", (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ msg: "Thank You!" });
// });

app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});

mongoConfig();
