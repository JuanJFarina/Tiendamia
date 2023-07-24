const express = require('express');
const router = express.Router();
const reportController = require('../controllers/ReportController');

router.get('/reports/approve-and-near-delivery', reportController.getApproveAndNearDeliveryOrders);
router.get('/reports/traveling-between-dates', reportController.getTravelingOrdersBetweenDates);

module.exports = router;