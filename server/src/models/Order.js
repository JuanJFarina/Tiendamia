const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  createDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Approve', 'Cancel', 'Delivery', 'Traveling'], required: true },
  client: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  shippingPromise: { type: Date, required: true },
  items: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  }],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;