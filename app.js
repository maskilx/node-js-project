const express = require("express");
const server = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

const shoes = require("./routes/shoes");
const users = require("./routes/user");

// Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Routes
server.use("/shoes", shoes);
server.use("/users", users);

// Database connection
const PORT = process.env.PORT || 8080;
connectDB();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
