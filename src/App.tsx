import { useEffect, useMemo } from "react";
import { PokedexCard } from "./components/PokedexCard";
import { VisualSide } from "./components/PokedexCard/VisualSide";
import { DataSide } from "./components/PokedexCard/DataSide";
import { useSearch } from "./stores/SearchStore";
import { BackgroundText } from "./components/PokedexCard/BackgroundText";
import { usePokemon } from "./hooks/usePokemon";
import { usePokemonSpecies } from "./hooks/usePokemonSpecies";
import { pokemonTypeColors } from "./utils/colors";
import { usePreloadImages } from "./hooks/usePreloadImages";
import { getOfficialArtworkUrl } from "./utils/sprites";

function App() {
  const { currentId, next, prev } = useSearch();
  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isErrorPokemon,
    refetch: refetchPokemon,
  } = usePokemon(String(currentId));
  const {
    data: pokemonSpecies,
    isLoading: isLoadingSpecies,
    isError: isErrorSpecies,
    refetch: refetchSpecies,
  } = usePokemonSpecies(String(currentId));

  const isLoading = isLoadingPokemon || isLoadingSpecies;
  const isError = isErrorPokemon || isErrorSpecies;

  const handleRetry = () => {
    refetchPokemon();
    refetchSpecies();
  };

  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId + 1;

  const urlsToPreload = useMemo(() => {
    const urls: string[] = [];
    if (prevId) {
      urls.push(getOfficialArtworkUrl(prevId));
    }
    urls.push(getOfficialArtworkUrl(nextId));
    return urls;
  }, [prevId, nextId]);

  usePreloadImages(urlsToPreload);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, prev]);

  useEffect(() => {
    if (pokemon) {
      const primaryType = pokemon.types[0].type.name;
      const color = pokemonTypeColors[primaryType];
      document.body.style.setProperty("--bg-color", color);
    }
  }, [pokemon]);

  return (
    <>
      <button className="nav-btn prev" onClick={prev} aria-label="Anterior">
        &#10094;
      </button>
      <button className="nav-btn next" onClick={next} aria-label="Próximo">
        &#10095;
      </button>

      <PokedexCard
        pokemon={pokemon}
        pokemonSpecies={pokemonSpecies}
        isLoading={isLoading}
        isError={isError}
        onRetry={handleRetry}
      >
        <main className="card-wrapper animate" id="content">
          <BackgroundText />
          <VisualSide />
          <DataSide />
        </main>
      </PokedexCard>
    </>
  );
}

export default App;
