import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import ApproveAndNearDeliveryReport from './components/ApproveAndNearDeliveryReport';
import TravelingReport from './components/TravelingReport';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lista de Pedidos</Link>
            </li>
            <li>
              <Link to="/order-detail">Detalles de Pedido</Link>
            </li>
            <li>
              <Link to="/approve-near-delivery-report">Reporte de Pedidos Aprobados y por Entregar</Link>
            </li>
            <li>
              <Link to="/traveling-report">Reporte de Pedidos en Viaje</Link>
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