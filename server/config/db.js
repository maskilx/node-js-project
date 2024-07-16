const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adimaskil:123@cluster0.pllj1ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;

