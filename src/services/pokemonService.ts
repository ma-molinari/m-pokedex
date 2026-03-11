import axios from "axios";
import type { Pokemon, PokemonSpecies } from "../entities";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
});

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const { data } = await api.get<Pokemon>(`/pokemon/${id}`);
  return data;
};

export const getPokemonSpecies = async (
  id: string,
): Promise<PokemonSpecies> => {
  const { data } = await api.get<PokemonSpecies>(`/pokemon-species/${id}`);
  return data;
};
