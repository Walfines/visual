// getStats.js
import { getDataFromAPI } from './getDataFromAPI';

export function getStats() {
  return getDataFromAPI()
    .then(pokemons => {
      const stats = {};

      pokemons.forEach(pokemon => {
        pokemon.types.forEach(type => {
          if (stats[type]) {
            stats[type]++;
          } else {
            stats[type] = 1;
          }
        });
      });

      return stats;
    })
    .catch(error => {
      console.error("Error calculating stats:", error);
      throw error;
    });
}
