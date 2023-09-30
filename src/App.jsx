import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbr from './component/Navbr';
import Home from './Home';
import Cardx from './component/Card';  // Sesuaikan dengan path yang benar
import CardDetail from './component/CardDetail';    // Sesuaikan dengan path yang benar
// Sesuaikan dengan path yang benar
import Footer from './component/Footer';

function App() {
  return (
    
      
        <div className="background">
          <Navbr />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/cards" element={<Cardx />} />
            <Route path="/card-detail/:cardId" element={<CardDetail />} />
          </Routes>
          <Footer />
        </div>
      
    
  );
}

export default App;
