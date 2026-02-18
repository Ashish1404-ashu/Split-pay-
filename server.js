const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/chunks_pay")
.then(() => {
    console.log("MongoDB Connected ✅");
})
.catch((err) => {
    console.log("MongoDB Error ❌", err);
});

// 🔥 USER SCHEMA
const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

// 🔥 REGISTER API
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;

    const newUser = new User({ email, password });
    await newUser.save();

    res.json({
        success: true,
        message: "User registered successfully"
    });
});

// 🔥 LOGIN API
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        return res.json({
            success: true,
            message: "Login successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid credentials"
    });
});

// SERVER
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000 🚀");
});