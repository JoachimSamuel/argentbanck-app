import React, { useState } from 'react';
import InputField from '../../components/InputField';
import SignInButton from '../../components/SignInButton';
import { login } from './auth';

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
      const response = await login(formData.username, formData.password);

      if (response.status === 400) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error: User not found!");
      } else {
        setErrorMessage('');
        // Gérer la réponse de l'API en cas de succès
      }
    } catch (error) {
      console.error("Erreur de connexion :", error.message);
      setErrorMessage("Error: User not found!");
      // Gérer les erreurs de connexion
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
