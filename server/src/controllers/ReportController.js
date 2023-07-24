const Order = require('../models/Order');

// Controller to get all orders in "Approve" state and close to the delivery promise date
const getApproveAndNearDeliveryOrders = async (req, res) => {
  try {
    const currentDate = new Date();
    const twoDaysLater = new Date();
    twoDaysLater.setDate(twoDaysLater.getDate() + 2);

    const orders = await Order.find({
      $and: [
        { status: 'Approve' },
        { shippingPromise: { $lt: twoDaysLater } },
        { shippingPromise: { $gte: currentDate } },
      ],
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};

// Controller to get all orders in "Traveling" state within a given date range
const getTravelingOrdersBetweenDates = async (req, res) => {
  try {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    const orders = await Order.find({
      status: 'Traveling',
      shippingPromise: { $gte: startDate, $lte: endDate },
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};

module.exports = {
  getApproveAndNearDeliveryOrders,
  getTravelingOrdersBetweenDates,
};