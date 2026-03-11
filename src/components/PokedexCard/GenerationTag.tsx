import { usePokedexCard } from "./index";

export const GenerationTag = () => {
  const { pokemonSpecies } = usePokedexCard();

  if (!pokemonSpecies) {
    return (
      <span className="generation-tag">
        Gen: <span id="p-region">...</span>
      </span>
    );
  }

  return (
    <span className="generation-tag">
      Gen: <span id="p-region">{pokemonSpecies.generation.name}</span>
    </span>
  );
};
