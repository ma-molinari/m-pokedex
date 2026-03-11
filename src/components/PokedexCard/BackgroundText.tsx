import { usePokedexCard } from "./index";

export const BackgroundText = () => {
  const { pokemon } = usePokedexCard();

  if (!pokemon) {
    return (
      <div className="bg-text-large" id="bg-text">
        ...
      </div>
    );
  }

  return (
    <div className="bg-text-large" id="bg-text">
      {pokemon.name}
    </div>
  );
};
