import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import ApproveAndNearDeliveryReport from './components/ApproveAndNearDeliveryReport';
import TravelingReport from './components/TravelingReport';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Order List</Link>
            </li>
            <li>
              <Link to="/order-detail">Order Detail</Link>
            </li>
            <li>
              <Link to="/approve-near-delivery-report">Approve and Near Delivery Report</Link>
            </li>
            <li>
              <Link to="/traveling-report">Traveling Report</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<OrderList />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/approve-near-delivery-report" element={<ApproveAndNearDeliveryReport />} />
          <Route path="/traveling-report" element={<TravelingReport />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;