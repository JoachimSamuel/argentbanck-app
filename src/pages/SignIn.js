
import React from 'react';
import InputField from '../components/InputField';
import SignInButton from '../components/SignInButton';


const SignIn = () => {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <InputField label="Username" type="text" id="username" />
            <InputField label="Password" type="password" id="password" />
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <SignInButton text="Sign In" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
