import { motion, useReducedMotion } from "framer-motion";
import { usePokedexCard } from "./index";

export const BackgroundText = () => {
  const { pokemon } = usePokedexCard();
  const reduceMotion = useReducedMotion();

  if (!pokemon) {
    return (
      <div
        className="bg-text-large bg-text-large--ghost"
        id="bg-text"
        aria-hidden
      >
        …
      </div>
    );
  }

  return (
    <motion.div
      key={pokemon.name}
      id="bg-text"
      className="bg-text-large"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.28,
        ease: "easeOut",
      }}
    >
      {pokemon.name}
    </motion.div>
  );
};
