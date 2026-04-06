import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
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
import { formatId } from "./utils/formatters";

function App() {
  const { currentId, next, prev } = useSearch();
  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isFetching: isFetchingPokemon,
    isError: isErrorPokemon,
    refetch: refetchPokemon,
  } = usePokemon(String(currentId));
  const {
    data: pokemonSpecies,
    isLoading: isLoadingSpecies,
    isFetching: isFetchingSpecies,
    isError: isErrorSpecies,
    refetch: refetchSpecies,
  } = usePokemonSpecies(String(currentId));

  const isLoading = isLoadingPokemon || isLoadingSpecies;
  const isFetching = isFetchingPokemon || isFetchingSpecies;
  const isError = isErrorPokemon || isErrorSpecies;

  const speciesAligned = Boolean(
    pokemon && pokemonSpecies && pokemon.id === pokemonSpecies.id,
  );

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
      <button
        type="button"
        className={`nav-btn prev${isFetching ? " nav-btn--fetching" : ""}`}
        onClick={prev}
        aria-label="Anterior"
        aria-busy={isFetching}
      >
        &#10094;
      </button>
      <button
        type="button"
        className={`nav-btn next${isFetching ? " nav-btn--fetching" : ""}`}
        onClick={next}
        aria-label="Próximo"
        aria-busy={isFetching}
      >
        &#10095;
      </button>

      <PokedexCard
        pokemon={pokemon}
        pokemonSpecies={pokemonSpecies}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        speciesAligned={speciesAligned}
        onRetry={handleRetry}
      >
        <motion.main
          id="content"
          className="card-wrapper animate"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          aria-busy={isLoading || (isFetching && !speciesAligned)}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              next();
            } else if (info.offset.x > 50) {
              prev();
            }
          }}
        >
          {pokemon && speciesAligned ? (
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {pokemon.name}, número {formatId(pokemon.id)}
            </span>
          ) : null}
          <BackgroundText />
          <VisualSide />
          <DataSide />
        </motion.main>
      </PokedexCard>
    </>
  );
}

export default App;
