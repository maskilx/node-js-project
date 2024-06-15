
// const shoes = [
//     { id: 1, title: "Men Shoe 1", price: 100, image: "https://via.placeholder.com/150", category: "men" },
//     { id: 2, title: "Women Shoe 1", price: 200, image: "https://via.placeholder.com/150", category: "women" },
//     { id: 3, title: "Men Shoe 2", price: 150, image: "https://via.placeholder.com/150", category: "men" },
//     { id: 4, title: "Women Shoe 2", price: 250, image: "https://via.placeholder.com/150", category: "women" },
//     { id: 5, title: "kids Shoe 1", price: 175, image: "https://via.placeholder.com/150", category: "kids" },
//     { id: 6, title: "sale 1", price: 175, image: "https://th.bing.com/th/id/OIP.rZ0KBY5tUymlt043MebyVQAAAA?w=131&h=180&c=7&r=0&o=5&pid=1.7", category: "sale" }
// ];

// function getallshoes(){
//     return shoes
// }


// function getshoe(id){
// return shoes.filter(shoe => shoe.id == id)[0];
// }

// function getMenShoes() {
//     return shoes.filter(shoe => shoe.category === "men");
// }

// function getWomenShoes() {
//     return shoes.filter(shoe => shoe.category === "women");
// }

// function getKidsShoes() {
//     return shoes.filter(shoe => shoe.category === "kids");
// }

// function getsaleshoes() {
//     return shoes.filter(shoe => shoe.category === "sale");
// }

// module.exports = {
//     getallshoes, getshoe, getMenShoes,
//     getWomenShoes, getKidsShoes, getsaleshoes
// }

const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    title:{type: String, required:true},
    price:{type: Number, required:true},
    image:{type: String, required:true},
    category:{type: String, required:true},
}, {timestamps: true});

const Shoes = mongoose.model("Shoes", shoesSchema);

module.exports = Shoes;

