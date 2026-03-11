import { usePokedexCard } from "./index";
import { formatId, toMetric } from "../../utils/formatters";

export const DataSide = () => {
  const { pokemon } = usePokedexCard();

  if (!pokemon) {
    return (
      <section className="data-side">
        <p className="poke-id" id="p-id">
          #000
        </p>
        <h1 className="poke-name" id="p-name" data-testid="pokemon-name">
          Carregando...
        </h1>
        <div className="physical-info">
          <strong>Height:</strong> <span id="p-height">0.0m</span> |
          <strong>Weight:</strong> <span id="p-weight">0.0kg</span>
        </div>
        <h3>Base stats:</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span>HP</span> <span id="v-hp">0</span>
          </div>
          <div className="stat-item">
            <span>Attack</span> <span id="v-atk">0</span>
          </div>
          <div className="stat-item">
            <span>Defense</span> <span id="v-def">0</span>
          </div>
          <div className="stat-item">
            <span>Speed</span> <span id="v-spd">0</span>
          </div>
          <div className="stat-item">
            <span>Sp. Atk</span> <span id="v-satk">0</span>
          </div>
          <div className="stat-item">
            <span>Sp. Def</span> <span id="v-sdef">0</span>
          </div>
        </div>
      </section>
    );
  }

  const { id, name, height, weight, stats } = pokemon;

  const statMapping = {
    hp: "v-hp",
    attack: "v-atk",
    defense: "v-def",
    speed: "v-spd",
    "special-attack": "v-satk",
    "special-defense": "v-sdef",
  };

  return (
    <section className="data-side">
      <p className="poke-id" id="p-id">
        {formatId(id)}
      </p>
      <h1 className="poke-name" id="p-name" data-testid="pokemon-name">
        {name}
      </h1>

      <div className="physical-info">
        <strong>Height:</strong> <span id="p-height">{toMetric(height)}m</span>{" "}
        |<strong>Weight:</strong>{" "}
        <span id="p-weight">{toMetric(weight)}kg</span>
      </div>

      <h3>Base stats:</h3>
      <div className="stats-grid">
        {stats.map(({ stat, base_stat }) => {
          const statId =
            statMapping[stat.name as keyof typeof statMapping] ??
            `stat-${stat.name.replace(/-/g, "_")}`;
          return (
            <div className="stat-item" key={stat.name}>
              <span>{stat.name.replace(/-/g, " ")}</span>
              <span id={statId}>{base_stat}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
