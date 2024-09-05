import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cargo from './pages/Cargo';
import Home from './pages/Home';
import Trade from './pages/Trade';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/cargo" element={<Cargo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
