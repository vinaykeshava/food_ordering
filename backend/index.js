const express = require('express');
const mongoose = require('mongoose');
const connectToMongoose = require('./connectDb');
const MenuItem = require('./model/menuItem');
const Order = require('./model/order');
const bodyParser = require('body-parser');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

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



app.post('/menu/orders', async (req, res) => {
    try {
        const { items } = req.body;
        const orders = [];
        const token = uuidv4();

        items.forEach(async (item) => {
            const { name, quantity, price } = item;

            const order = new Order({ name, quantity, price, token });
            await order.save();

            orders.push(order);
        });

        res.status(201).json({ message: 'Orders created successfully', orders });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create orders', error });
    }
});

app.get('/menu/orders', async (req, res) => {
    try {
      const orders = await Order.find();
  
      // Group the orders by token
      const groupedOrders = orders.reduce((groups, order) => {
        const { token } = order;
        if (!groups[token]) {
          groups[token] = [];
        }
        groups[token].push(order);
        return groups;
      }, {});
  
      res.status(200).json({ message: 'Orders retrieved successfully', orders: groupedOrders });
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve orders', error });
    }
  });
  


app.listen(3000)

