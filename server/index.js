const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const orderRoutes = require('./src/routes/OrderRoutes');
const itemRoutes = require('./src/routes/ItemRoutes');
const reportRoutes = require('./src/routes/ReportRoutes');
const mockData = require('./src/data/seedData');
const Order = require('./src/models/Order');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Function to seed the database with mock data
const seedDatabase = async () => {
  try {
    // Clear the existing data (optional, depending on your needs)
    await Order.deleteMany({});

    // Insert the mock data
    await Order.insertMany(mockData);

    console.log('Database seeded with mock data successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

// Call the function to seed the database
//seedDatabase();

// Routes
app.use('/api', orderRoutes);
app.use('/api', itemRoutes);
app.use('/api', reportRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server', error: err.message });
});

// 404 route not found handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});