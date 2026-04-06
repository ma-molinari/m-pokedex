import { usePokedexCard } from "./index";

export const GenerationTag = () => {
  const { pokemonSpecies, speciesAligned } = usePokedexCard();

  if (!pokemonSpecies || !speciesAligned) {
    return (
      <span className="generation-tag">
        Gen:{" "}
        <span id="p-region" className="generation-tag__pending">
          …
        </span>
      </span>
    );
  }

  return (
    <span className="generation-tag">
      Gen: <span id="p-region">{pokemonSpecies.generation.name}</span>
    </span>
  );
};
