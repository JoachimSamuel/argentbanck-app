import React from 'react';

const SignInButton = ({ text }) => {
  return (
    <button type="submit" className="sign-in-button">
      {text}
    </button>
  );
};

export default SignInButton;
