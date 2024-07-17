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
const carts = require("./routes/carts"); // Add the carts route
const men = require("./routes/men");
const women =require("./routes/women");
const kids = require("./routes/kids");
const sale = require("./routes/sale");

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
server.use("/carts", carts); // Use the carts route
server.use("/men",men);
server.use("/women",women);
server.use("/kids",kids);
server.use("/sale",sale);

// Database connection
const PORT = process.env.PORT || 8080;
connectDB();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
