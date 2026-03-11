import { usePokedexCard } from "./index";
import { getOfficialArtworkUrl } from "../../utils/sprites";

export const Image = () => {
  const { pokemon, isLoading } = usePokedexCard();

  if (!pokemon) {
    return (
      <div className="pokemon-main-img" style={{ aspectRatio: "1 / 1" }} />
    );
  }

  const spriteUrl =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ??
    getOfficialArtworkUrl(pokemon.id);

  return (
    <img
      id="p-img"
      src={spriteUrl}
      alt={pokemon.name}
      className={`pokemon-main-img ${isLoading ? "loading" : ""}`}
    />
  );
};
