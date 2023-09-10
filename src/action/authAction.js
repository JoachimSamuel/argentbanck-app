// Action pour enregistrer le token d'authentification dans Redux
export const saveAuthToken = (token) => {
    return {
      type: 'SAVE_AUTH_TOKEN',
      payload: token,
    };
  };
  