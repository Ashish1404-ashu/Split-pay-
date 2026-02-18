const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// =======================
// MongoDB Atlas Connection
// =======================

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log("Mongo Error ❌", err));

// =======================
// User Schema
// =======================

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

// =======================
// Serve Static Files
// =======================

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// =======================
// REGISTER API
// =======================

app.post("/api/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.json({
            success: true,
            message: "User registered successfully"
        });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// =======================
// LOGIN API
// =======================

app.post("/api/login", async (req, res) => {
    try {
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

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// =======================
// Start Server (IMPORTANT)
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});