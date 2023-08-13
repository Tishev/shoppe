import Home from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopItems from './pages/ShopItems';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopItem" element={<ShopItems />} />
      </Routes>
    </Router>
  );
}

export default App;
