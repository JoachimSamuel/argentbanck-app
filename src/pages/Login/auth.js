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
        const data = await response.text();
        return data;
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
  