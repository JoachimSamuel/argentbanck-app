import React, { useState } from 'react';
import './ExpandableDiv.css'; 



const ExpandableDiv = ({ date, description, amount, balance }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState('lorem ipsum'); // État pour stocker la valeur de l'input
  const [isNoteEditable, setIsNoteEditable] = useState(false);


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const stopPropagation = (event) => {
    event.stopPropagation(); // Arrêter la propagation de l'événement
  };

  const divClass = `expandable-div ${isExpanded ? 'expanded' : ''}`;
  const arrowClass = `arrow ${isExpanded ? 'up' : 'down'}`; // Classe pour la flèche

  return (
    <div>
      <div className={divClass} onClick={toggleExpand}>
        <div className='test'>
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
          <span className={arrowClass}>^</span> {/* Gestionnaire d'événements pour la flèche */}
        </div>
        {isExpanded && (
          <div className="additional-info">
            <div className='additional-info-p'>
              <p>Transaction Type</p>
              <p>Electronic</p>
            </div>
            <div className='input-contenair'>
            <p>Category</p>
              <select
                onClick={(event) => { event.stopPropagation(); }}
                disabled={!isNoteEditable}
              >
                <option value="option1">Food</option>
                <option value="option2">Transport</option>
                <option value="option3">Shopping</option>
              </select>
              <i
                className="fas fa-pencil-alt"
                onClick={(event) => {
                event.stopPropagation();
                setIsNoteEditable((prev) => !prev); // Inverse l'état actuel de l'édition
                }}
              ></i>
            </div>
            <div className='input-contenair'>
            <p>Note</p>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onClick={stopPropagation}
              readOnly={!isNoteEditable}
              onBlur={() => setIsNoteEditable(false)}
            />
              <i
                className="fas fa-pencil-alt"
                onClick={(event) => {
                event.stopPropagation();
                setIsNoteEditable((prev) => !prev); // Inverse l'état actuel de l'édition
                 }}
               ></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableDiv;
