import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        {/* Future: <Route path="/search" element={<Search />} /> */}
        {/* Future: <Route path="/property/:id" element={<PropertyDetail />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
