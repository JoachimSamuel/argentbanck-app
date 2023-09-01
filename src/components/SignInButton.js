import React from 'react';

const SignInButton = ({ text, type }) => {
  return (
    <button type={type} className="sign-in-button">
      {text}
    </button>
  );
};

export default SignInButton;
