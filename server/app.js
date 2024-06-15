const express = require('express');
const mongoose = require('mongoose');
const shoes = require('./routes/shoes.js');
const server = express();
const cors = require('cors')
server.use(express.static("public"));

server.use(cors());
server.use(express.json());
server.use("/shoes",shoes);

server.listen(8080, () => console.log('Server is running on port on http://localhost:8080'));

mongoose.connect('mongodb://127.0.0.1:27017/shoesStore')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))