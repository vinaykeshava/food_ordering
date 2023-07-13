const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItem  = new mongoose.Schema({
    name: {type: String, required: true},
    price :  {type: Number, required: true},
    description:{ type :String, required: true },
    imageURL :{type: String},
    rating: {type: Number},
    numReviews: {type: Number},
})

const Menu = mongoose.model('MenuItems',menuItem);

module.exports = Menu;