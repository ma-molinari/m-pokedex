import { usePokedexCard } from "./index";
import { getOfficialArtworkUrl } from "../../utils/sprites";

export const Image = () => {
  const { pokemon, isLoading, speciesAligned } = usePokedexCard();

  if (!pokemon) {
    return (
      <div
        className="pokemon-main-img pokemon-main-img--placeholder skeleton-image-placeholder"
        style={{ aspectRatio: "1 / 1" }}
        aria-hidden
      />
    );
  }

  const spriteUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ??
    getOfficialArtworkUrl(pokemon.id);

  const showLoadingState =
    isLoading || !speciesAligned;

  return (
    <img
      id="p-img"
      src={spriteUrl}
      alt={pokemon.name}
      className={`pokemon-main-img${showLoadingState ? " loading" : ""}`}
    />
  );
};
