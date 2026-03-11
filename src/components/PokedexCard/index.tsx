import { createContext, useContext, ReactNode } from "react";
import { Pokemon, PokemonSpecies } from "../../entities";

interface PokedexCardContextType {
  pokemon: Pokemon | undefined;
  pokemonSpecies: PokemonSpecies | undefined;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
}

const PokedexCardContext = createContext<PokedexCardContextType | undefined>(
  undefined,
);

interface PokedexCardProps {
  children: ReactNode;
  pokemon: Pokemon | undefined;
  pokemonSpecies: PokemonSpecies | undefined;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
}

export const PokedexCard = ({
  children,
  pokemon,
  pokemonSpecies,
  isLoading,
  isError,
  onRetry,
}: PokedexCardProps) => {
  return (
    <PokedexCardContext.Provider
      value={{ pokemon, pokemonSpecies, isLoading, isError, onRetry }}
    >
      {isError ? (
        <main className="card-wrapper animate" id="content">
          <section
            className="data-side"
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Erro ao carregar Pokémon
            </p>
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="nav-btn"
                style={{
                  position: "relative",
                  left: "auto",
                  right: "auto",
                  top: "auto",
                  transform: "none",
                }}
              >
                Tentar novamente
              </button>
            )}
          </section>
        </main>
      ) : (
        children
      )}
    </PokedexCardContext.Provider>
  );
};

export const usePokedexCard = () => {
  const context = useContext(PokedexCardContext);
  if (context === undefined) {
    throw new Error("usePokedexCard must be used within a PokedexCard");
  }
  return context;
};
