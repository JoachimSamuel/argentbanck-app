import React, { useState } from 'react';
import InputField from '../../components/InputField';
import SignInButton from '../../components/SignInButton';
import { login, updateAuthToken } from './auth';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
    setErrorMessage(''); // Réinitialiser le message d'erreur lorsque l'utilisateur modifie le champ
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authToken = await login(formData.username, formData.password);

      if (authToken) {
        console.log("Connexion réussie ! Token d'authentification :", authToken);

        // Vérifiez si "Remember Me" est coché avant de stocker le token dans le localStorage
        if (formData.rememberMe) {
          updateAuthToken(authToken);
        }

        // Vous pouvez également stocker le token dans Redux ici pour une utilisation courante
        // Pendant la session en cours.

        // Autres traitements

      } else {
        setErrorMessage("Token d'authentification manquant dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMessage("Erreur inattendue lors de la connexion !");
    }
  };

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              id="username"
              onInputChange={handleInputChange}
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              onInputChange={handleInputChange}
            />
            <div className="input-remember">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={() =>
                  setFormData({
                    ...formData,
                    rememberMe: !formData.rememberMe,
                  })
                }
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <SignInButton text="Sign In" type="submit" />
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </section>
      </main>
    </div>
  );
};

export default SignIn;
