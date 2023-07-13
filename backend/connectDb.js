const mongoose = require('mongoose');

const connectToMongoose = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/menu', {useNewUrlParser: true});
        console.log("Connected to Database");
    }
    catch{
        console.log("Error connecting to database")
    }
}

module.exports = connectToMongoose;
