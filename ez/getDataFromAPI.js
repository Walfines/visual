

import fetch from 'node-fetch'; 

export function getDataFromAPI() {
  return fetch('https://fakeapi.extendsclass.com/pokemons')
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching data:", error);
      throw error;
    });
}
