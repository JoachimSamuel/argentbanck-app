import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      // Récupérez le jeton d'authentification depuis le stockage local
      const authToken = localStorage.getItem('authToken');
      console.log('Token d\'authentification:', authToken);
  
      // Effectuez une requête POST à l'endpoint de votre API pour obtenir les informations de l'utilisateur
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST', // Utilisez la méthode POST
          headers: {
            'Authorization': `Bearer ${authToken}`, // Utilisez le jeton d'authentification
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}), // Aucun corps de requête nécessaire
        });
  
        if (response.status === 200) {
          const userData = await response.json();
          if (userData && userData.userName) {
            setUserName(userData.userName);
            console.log('Données utilisateur:', userData);
          }
        } else {
          // Gérez les erreurs en conséquence
        }
      } catch (error) {
        // Gérez les erreurs en conséquence
      }
    };
  
    // Appelez la fonction pour obtenir les informations de l'utilisateur
    fetchUserData();
  }, []);
  
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {location.pathname === '/User' ? (
          <>
            <Link className="main-nav-item" to="/User">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
