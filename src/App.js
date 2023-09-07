import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'; 
import SignIn from './pages/Login/SignIn'; 
import Header from './components/navbar/Navbar';
import TransactionsPage from './pages/transactions/transaction';  
import Footer from './components/footer/Footer'; 
import UserPage from './pages/User/UserPage';
import "./css/main.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} /> 
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path='/User' element={<UserPage />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};
  
export default App;
