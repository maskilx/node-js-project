const Shoes = require("../models/shoes.js")
async function getAllshoes(req, res) {
    try {
        const shoes = await Shoes.find();
        res.render("../views/shoes", {shoes:shoes});
        //res.status(200).json({message:"shoes fetched successfully", shoes:shoes});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

async function createNewShoe( req,res) {
    const newShoe = {...req.body};
    const shoeEntity = new Shoes(newShoe);
    try {
        const newDocument = await shoeEntity.save();
        res.status(201).json({message:"new shoe created successfully", newShoe:newDocument});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
async function deleteShoeById( req,res) {
    const {id} = req.params;
    try {
        const deleted = await Shoes.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({message:"shoe not found"});

        res.status(200).json({message:`shoe with id ${id} has been deleted`, deletedShoe:deleted});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

async function filterShoesByCategory( req,res) {
    const category = req.query.category;
    
    try {
        const filteredShoes = await Shoes.find({category:category});
    
        res.status(200).json({message:`shoes with category ${category} recieved successfully`, filteredShoes:filteredShoes});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAllshoes, 
    createNewShoe,
    deleteShoeById,
    filterShoesByCategory
}