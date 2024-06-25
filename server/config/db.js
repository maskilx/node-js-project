const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shoesStore');
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;


// mongoose.connect('mongodb://127.0.0.1:27017/shoesStore')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err))