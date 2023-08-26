// components/SignInButton.js
import React from 'react';

const SignInButton = ({ text, link }) => {
  return (
    <a href={link} className="sign-in-button">
      {text}
    </a>
  );
};

export default SignInButton;
