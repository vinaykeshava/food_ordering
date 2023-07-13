const mongoose = require('mongoose');
const menu = require('../model/menuItem');
const menuList = require('./menu-list')
const db = mongoose.connection;

const uploadDatasetToMongo = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/menu', { useNewUrlParser: true });
        console.log('Connected to Db');
        menuList.forEach(menuItem => {
            const newMenu = new menu({
                name: menuItem.name,
                price: menuItem.price,
                description: menuItem.description,
                imageURL: menuItem.imageURL,
                rating: menuItem.rating,
                numReviews: menuItem.numReviews,
            });
            newMenu.save();

        })
        console.log("saved all Items");
    }
    catch (error) {
        console.log("Error in Db", error);
    }

}

module.exports = uploadDatasetToMongo;