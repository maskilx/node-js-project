const express = require('express');
const shoes = require('./routes/shoes.js');
const users = require('./routes/user.js');
const connectDB = require('./config/db.js');
const server = express();
const cors = require('cors')
server.use(express.static("public"));
require('dotenv').config()
server.set("view engine", "ejs");
server.use(cors());
server.use(express.json());
server.use("/shoes",shoes);
server.use("/users",users);
//cd "C:\Users\adima\Downloads\Final project store\server"
server.listen(process.env.PORT, () => console.log(`Server is running on port on http://localhost:${process.env.PORT}`));

connectDB();