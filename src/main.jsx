import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import App from './App';
import Cart from './Cart';
import Store from './Store';
import './index.css';

const Root = () => {
  const [total, setTotal] = useState(0);

  const increaseTotal = (quantity) => {
    setTotal((prevTotal) => prevTotal + quantity);
    
  };
  const decreaseTotal = () => {
    setTotal((prevTotal) => prevTotal - 1)
  }

  return (
    <Router>
      <div>
        <Header total={total} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<Store increaseTotal={increaseTotal} />} />
          <Route path="/cart" element={<Cart decreaseTotal={decreaseTotal} />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
