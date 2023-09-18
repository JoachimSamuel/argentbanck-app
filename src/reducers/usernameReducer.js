// reducers/usernameReducer.js
import { combineReducers } from 'redux';

const initialState = {
    username: 'Tony Jarvis',
    firstname: 'Tony',
    lastname: 'Stark'
  };
  

  const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
        return {
          ...state,
          username: action.payload
        };
      default:
        return state;
    }
  };
  

export default usernameReducer;