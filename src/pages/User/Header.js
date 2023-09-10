import React, { useState } from 'react';
import Button from '../../components/Button'; 

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      {isEditing ? (
        <form>
          <h1>Edit User Info</h1>
          <div className='form-input'>
            
          <label htmlFor="userName">User Name:</label>
          <input type="text" id="userName" placeholder="User Name" />

          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="First Name" readOnly/>

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Last Name" readOnly/>
          </div>
          <div className="button-container">
            <Button  onClick={toggleEdit}>Save</Button>
            <Button  onClick={toggleEdit}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <Button onClick={toggleEdit} >
            {isEditing ? "Cancel" : "Edit Name"}
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
