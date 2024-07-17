
const express = require("express");
const router = express.Router();
const shoescontroller = require('../cotrollers/shoes.js');

router.get("/",shoescontroller.getAllshoes);
router.post("/",shoescontroller.createNewShoe);
router.delete("/:id",shoescontroller.deleteShoeById);
router.get("/filter",shoescontroller.filterShoesByCategory);
router.get("/:id",shoescontroller.getShoeById);

module.exports = router