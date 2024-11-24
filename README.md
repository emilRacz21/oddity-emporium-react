# Oddity Emporium

Oddity Emporium is a web application that allows users to browse, add, and review inventions. It features a React-based front-end that communicates with a Node.js backend using MongoDB for data storage. Users can add new inventions, upload images, leave reviews, and interact with the product catalog.

## Features

- **Browse Products** – View inventions in the shop and their details.
- **Add Inventions** – Logged-in users can add new products, upload images, and provide details such as price, weight, and description.
- **Reviews** – Users can leave reviews and ratings on products they have purchased.
- **Admin Panel** – Admins can manage product listings and reviews.

## Tech Stack

### Frontend:
- **React** – JavaScript library for building the user interface.
- **React Router** – For client-side routing.
- **SCSS** – CSS preprocessor for styling.
- **Axios** – For making API requests.

### Backend:
- **Node.js & Express** – For creating the REST API.
- **MongoDB** – For storing product data, reviews, and user information.
- **Multer** – For handling file uploads (product images).
- **CORS** – To handle cross-origin resource sharing.

## Live Demo

You can access the live demo [here](https://oddityshop.netlify.app/).

## Installation

## Backend (Node.js Server with MongoDB)

1. Download API:
   ```bash
    https://gofile.io/d/hjFMS0
2. Navigate to the project directory:
   ```bash
   cd oddity-emporium
3. Install dependencies for the backend:
   ```bash
   npm install
4. Setup environment variables:
   * Create a .env file in the root of your project.
   * Add the MongoDB connection string to .env:
     ```bash
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/oddity-emporium
5. Run the server:
   ```bash
   node server.js
The server will start on the specified port (PORT), and you'll be able to access the API on http://localhost:3000.

## Frontend (React Application)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
2. Install dependencies for the frontend:
   ```bash
    npm install
3. Run the React application:
   ```bash
    npm run dev

## Backend Details (Node.js with MongoDB)

The backend is built using Node.js and Express and connects to MongoDB for storing and managing inventions, reviews, and other related data.

Endpoints:
* GET /inventions – Get all inventions.
* POST /inventions – Add a new invention (requires image upload).
* POST /inventions/:id/reviews – Add a review for an invention.
* PUT /inventions/:id – Update an invention.
* DELETE /inventions/:id – Delete an invention.

MongoDB Schema:
* Invention – Represents the invention data including name, description, price, weight, reviews, etc.
* Review – Represents the review data including reviewer name, rating, and comment.

## Setting up MongoDB

The backend is connected to MongoDB via Mongoose, and you'll need a MongoDB Atlas account to set up your own database. Follow these steps to configure MongoDB:

1. Create an Atlas Account: Sign up at MongoDB Atlas.
2. Create a Cluster: Follow the steps in the Atlas dashboard to create a new cluster.
3. Get the Connection String: From your cluster's dashboard, click on "Connect" and select "Connect your application". Copy the connection string.
4. Update .env file: Replace the <username>, <password>, and <dbname> in the connection string with your actual MongoDB credentials and database name.

## Design

![shop](https://github.com/user-attachments/assets/6f469a53-4a81-4cb0-b093-2470326a67b2)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
