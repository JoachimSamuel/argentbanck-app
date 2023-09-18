import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { updateUsername } from '../../action/userNameAction'; // Vérifiez le chemin d'accès

const Header = () => {
  const username = useSelector((state) => state.username.username); // Assurez-vous d'accéder correctement à la propriété "username"
  const firstname = useSelector((state) => state.username.firstname);
  const lastname = useSelector((state) => state.username.lastname);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const dispatch = useDispatch();

  const handleUsernameChange = useCallback((e) => {
    setNewUsername(e.target.value);
  }, []);

  const handleSave = useCallback(() => {
    dispatch(updateUsername(newUsername)); // Utilisez l'action "updateUsername" pour mettre à jour le nom d'utilisateur
    setIsEditing(false);
  }, [newUsername, dispatch]);

  const toggleEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);


  return (
    <div className="header">
      {isEditing ? (
        <form>
          <h1>Edit User Info</h1>
          <div className='form-input'>
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              placeholder="User Name"
              value={newUsername}
              onChange={handleUsernameChange}
            />

            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder=""  />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" placeholder=""  />
          </div>
          <div className="button-container">
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={toggleEdit}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <h1>Welcome back<br />{username}</h1>
          <Button onClick={toggleEdit} >
            {isEditing ? "Cancel" : "Edit Name"}
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
