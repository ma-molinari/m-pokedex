import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/pokemonService";

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });
};
