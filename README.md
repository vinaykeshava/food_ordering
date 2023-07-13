# Food Ordering Web App

This is a web application for ordering food online. The project is built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- View Menu: Users can browse through the list of food items available.
- Order Summary: Users can view their order summary and complete the order.
- Previous Orders: Users can view their previous order details.

## Installation

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `node index.js`

**Note:** Make sure you have a MongoDB database set up and the MongoDB server running before starting the backend.

## Technologies Used

### Frontend

- React
- Redux (State management)
- Vite (Build tool)

### Backend

- Express.js
- Mongoose (MongoDB ODM)
- Node.js

## API Endpoints

1. **GET /menu/getItems**: Retrieves the menu items.
2. **POST /menu/orders**: Stores order details.
3. **GET /menu/orders**: Retrieves order details.

## Screenshots

![Home](/output/home.png)
*Caption: Screenshot of the home page.*

![Menu](/output/Food%20order.png)
*Caption: Screenshot of the menu page.*

![Order Summary](/output/order%20summary.png)
*Caption: Screenshot of the order summary page.*

![Previous Orders](/output/OrderHistory.png)
*Caption: Screenshot of the previous orders page.*

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

