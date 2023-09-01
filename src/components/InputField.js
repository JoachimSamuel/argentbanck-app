import React from 'react';

const InputField = ({ label, type, id, onInputChange }) => {
  // Pas besoin de gérer l'état local ici, utilisez simplement la valeur de la prop

  // Fonction de gestion du changement de champ d'entrée
  const handleChange = (event) => {
    const value = event.target.value;
    onInputChange(id, value); // Appeler la fonction de mise à jour de l'état du parent
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={handleChange} // Appeler handleChange lorsqu'il y a un changement dans le champ
      />
    </div>
  );
};

export default InputField;
