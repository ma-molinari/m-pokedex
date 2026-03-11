import { http, HttpResponse } from 'msw';

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  height: 7,
  weight: 69,
  stats: [
    { base_stat: 45, stat: { name: 'hp' } },
    { base_stat: 49, stat: { name: 'attack' } },
    { base_stat: 49, stat: { name: 'defense' } },
    { base_stat: 65, stat: { name: 'special-attack' } },
    { base_stat: 65, stat: { name: 'special-defense' } },
    { base_stat: 45, stat: { name: 'speed' } },
  ],
};

const mockPokemonSpecies = {
  generation: { name: 'generation-i' },
  names: [
    { name: 'Bulbasaur', language: { name: 'en' } },
    { name: 'フシギダネ', language: { name: 'ja-Hrkt' } },
  ],
};

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/:id', ({ params }) => {
    return HttpResponse.json(mockPokemon);
  }),
  http.get('https://pokeapi.co/api/v2/pokemon-species/:id', ({ params }) => {
    return HttpResponse.json(mockPokemonSpecies);
  }),
];
