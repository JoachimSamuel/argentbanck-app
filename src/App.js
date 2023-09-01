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
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};
  
export default App;
