import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import SignInButton from '../../components/SignInButton';
import { login, updateAuthToken } from './auth';
import { useDispatch } from 'react-redux';
import { saveAuthToken } from '../../action/authAction';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
    setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const authToken = await login(formData.username, formData.password);

      if (authToken) {
        console.log("Connexion réussie ! Token d'authentification :", authToken);

        if (formData.rememberMe) {
          updateAuthToken(authToken);
        }

        dispatch(saveAuthToken(authToken));

        console.log("La fonction navigate est appelée !");
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/User');
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
