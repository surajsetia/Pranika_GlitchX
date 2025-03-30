require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require("./src/routes/userRoutes.js")

const app = express();

// Connect to database
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get('/', (req, res)=>{
    res.send("HELLO FROM SERVER")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));