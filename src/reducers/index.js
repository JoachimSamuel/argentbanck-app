// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usernameReducer from './usernameReducer'; 

const rootReducer = combineReducers({
  // Vous pouvez ajouter d'autres reducers ici si nécessaire
  auth: authReducer, // "auth" est le nom de la portion d'état gérée par ce reducer
  username: usernameReducer
  // ... autres reducers
});

export default rootReducer;
