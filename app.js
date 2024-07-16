const express = require("express");
const server = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");
const session = require('express-session'); // הוספת express-session
const cartRouter = require('./routes/cart'); // הוספת מסלול עגלת הקניות

// Load environment variables from .env file
dotenv.config();

const shoes = require("./routes/shoes");
const users = require("./routes/user");

// Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));

// Session middleware
server.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Set the view engine to EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Routes
server.use("/shoes", shoes);
server.use("/users", users);
server.use("/cart", cartRouter); // הוספת מסלול עגלת הקניות

// Database connection
const PORT = process.env.PORT || 8080;
connectDB();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
