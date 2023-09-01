import React, { useState } from 'react';
import InputField from '../components/InputField';
import SignInButton from '../components/SignInButton';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Valeurs soumises :', formData);

    // Ici, vous pouvez effectuer la logique de connexion avec formData.username, formData.password, et formData.rememberMe
  };

  const isFormValid = formData.username.trim() !== '' && formData.password.trim() !== '';

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
            <SignInButton text="Sign In" className={isFormValid ? 'red-button' : ''} />
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
