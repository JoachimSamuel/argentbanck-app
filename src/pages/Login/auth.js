// auth.js

// Fonction pour mettre à jour le token dans le localStorage
export const updateAuthToken = (newAuthToken) => {
    localStorage.setItem("authToken", newAuthToken);
  };
  
  // Fonction pour récupérer le token depuis le localStorage
  export const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };
  
  // Fonction pour supprimer le token du localStorage
  export const removeAuthToken = () => {
    localStorage.removeItem("authToken");
  };
 
// Fonction pour effectuer la connexion
export async function login(email, password) {
    const headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
  
    const bodyContent = JSON.stringify({
      "email": email,
      "password": password,
    });
  
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
  
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.body && responseData.body.token) {
          const authToken = responseData.body.token;
          updateAuthToken(authToken); // Mettre à jour le token dans le localStorage
          return authToken;
         
        } else {
          throw new Error("Réponse incorrecte du serveur : jeton manquant.");
        }
      } else if (response.status === 400) {
        // Gérer le cas où les identifiants sont incorrects
        const errorData = await response.json();
        throw new Error(`Identifiants incorrects : ${errorData.message}`);
      } else {
        throw new Error(`Échec de la requête à l'API : ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Une erreur s'est produite lors de la requête à l'API : ${error.message}`);
    }
    
  }
