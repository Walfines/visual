
import { getStats } from './getStats';
import { getDataFromAPI } from './getDataFromAPI';

jest.mock('./getDataFromAPI');

describe('getStats', () => {
  it('должен возвращать правильную статистику для типов', async () => {
    getDataFromAPI.mockResolvedValue([
      { id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison'], family: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur', types: ['Grass', 'Poison'], family: 'Bulbasaur' },
      { id: 3, name: 'Venusaur', types: ['Grass', 'Poison'], family: 'Bulbasaur' },
      { id: 4, name: 'Charmander', types: ['Fire'], family: 'Charmander' },
      { id: 5, name: 'Charmeleon', types: ['Fire'], family: 'Charmander' }
    ]);

    const stats = await getStats();

    expect(stats).toEqual({
      Grass: 3,
      Poison: 3,
      Fire: 2
    });
  });
});
