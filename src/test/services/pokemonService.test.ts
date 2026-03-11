import { describe, it, expect } from 'vitest';
import { getPokemon, getPokemonSpecies } from '../../services/pokemonService';

describe('pokemonService', () => {
  describe('getPokemon', () => {
    it('should fetch pokemon data from API', async () => {
      const pokemon = await getPokemon('1');
      expect(pokemon).toBeDefined();
      expect(pokemon.id).toBe(1);
      expect(pokemon.name).toBe('bulbasaur');
      expect(pokemon.height).toBe(7);
      expect(pokemon.weight).toBe(69);
      expect(pokemon.stats).toHaveLength(6);
    });
  });

  describe('getPokemonSpecies', () => {
    it('should fetch pokemon species data from API', async () => {
      const species = await getPokemonSpecies('1');
      expect(species).toBeDefined();
      expect(species.generation.name).toBe('generation-i');
    });
  });
});
