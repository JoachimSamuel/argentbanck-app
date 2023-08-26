import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import SignIn from './pages/SignIn'; 
import Header from './components/navbar/Navbar'; 
import Footer from './components/footer/Footer'; 
import "./css/main.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Affiche l'en-tête sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} /> 
        </Routes>
        <Footer /> {/* Affiche le pied de page sur toutes les pages */}
      </div>
    </Router>
  );
};
  
export default App;
