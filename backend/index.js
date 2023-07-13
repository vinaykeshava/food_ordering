const express = require('express');
const mongoose = require('mongoose');
const connectToMongoose = require('./connectDb');
const MenuItem = require('./model/menuItem');
const bodyParser = require('body-parser');
const cors = require('cors')

// Uncomment just to upload data to database
// const uploadDatasetToMongo = require('./dataset/uploadDataset')

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectToMongoose();
const db = mongoose.connection;

// To upload the menuItems uncomment the below function, it will automatically upload the data into mongodb database
// uploadDatasetToMongo();

app.get('/menu/getItems', (req, res) => {
    MenuItem.find({}, { _id: 0 })
        .then((found) => {
            if (found) {
                res.status(200).json({ message: "Data fetched success", data: found })
            }
        })
        .catch((error) => {
            if (error) {
                res.status(400).json({ message: "Data cannot be fetched", error: error })
            }
        })
})

app.listen(3000)

