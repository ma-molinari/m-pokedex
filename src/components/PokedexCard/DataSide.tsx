import { usePokedexCard } from "./index";
import { formatId, toMetric } from "../../utils/formatters";
import { pokemonTypeColors } from "../../utils/colors";

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  speed: "Speed",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
};

function formatStatLabel(statName: string): string {
  return (
    STAT_LABELS[statName] ??
    statName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

const MAX_STAT = 255;

function StatBlock({
  label,
  value,
  statId,
}: {
  label: string;
  value: number;
  statId: string;
}) {
  const pct = Math.min(100, (value / MAX_STAT) * 100);
  return (
    <div className="stat-item">
      <div className="stat-row">
        <span className="stat-label">{label}</span>
        <span className="stat-value" id={statId}>
          {value}
        </span>
      </div>
      <div className="stat-bar-track" aria-hidden>
        <div className="stat-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function StatSkeletonRow({
  label,
  statId,
}: {
  label: string;
  statId: string;
}) {
  return (
    <div className="stat-item stat-item--skeleton">
      <div className="stat-row">
        <span className="stat-label">{label}</span>
        <span
          className="stat-value skeleton-inline skeleton-inline--stat"
          id={statId}
          aria-hidden
        />
      </div>
      <div className="stat-bar-track" aria-hidden>
        <div className="stat-bar-fill stat-bar-fill--skeleton" />
      </div>
    </div>
  );
}

export const DataSide = () => {
  const { pokemon } = usePokedexCard();

  const statMapping = {
    hp: "v-hp",
    attack: "v-atk",
    defense: "v-def",
    speed: "v-spd",
    "special-attack": "v-satk",
    "special-defense": "v-sdef",
  } as const;

  const skeletonStats: { key: keyof typeof statMapping; label: string }[] = [
    { key: "hp", label: "HP" },
    { key: "attack", label: "Attack" },
    { key: "defense", label: "Defense" },
    { key: "speed", label: "Speed" },
    { key: "special-attack", label: "Sp. Atk" },
    { key: "special-defense", label: "Sp. Def" },
  ];

  if (!pokemon) {
    return (
      <section className="data-side data-side--skeleton" aria-busy="true">
        <p className="poke-id skeleton-inline skeleton-inline--id" id="p-id">
          &nbsp;
        </p>
        <div
          className="poke-name-skeleton skeleton-block"
          id="p-name"
          data-testid="pokemon-name"
          aria-hidden
        />
        <div className="physical-info physical-info--skeleton">
          <span className="skeleton-inline skeleton-inline--physical" />
        </div>
        <div className="type-badges type-badges--skeleton" aria-hidden>
          <span className="type-badge-skeleton skeleton-block" />
          <span className="type-badge-skeleton skeleton-block" />
        </div>
        <h3>Base stats:</h3>
        <div className="stats-grid">
          {skeletonStats.map(({ key, label }) => (
            <StatSkeletonRow
              key={key}
              label={label}
              statId={statMapping[key]}
            />
          ))}
        </div>
      </section>
    );
  }

  const { id, name, height, weight, stats, types } = pokemon;

  const sortedTypes = [...types].sort((a, b) => a.slot - b.slot);

  return (
    <section className="data-side">
      <p className="poke-id" id="p-id">
        {formatId(id)}
      </p>
      <h1 className="poke-name" id="p-name" data-testid="pokemon-name">
        {name}
      </h1>

      <div className="physical-info">
        <strong>Height:</strong> <span id="p-height">{toMetric(height)}m</span>
        {" | "}
        <strong>Weight:</strong>{" "}
        <span id="p-weight">{toMetric(weight)}kg</span>
      </div>

      <div className="type-badges">
        {sortedTypes.map(({ type }) => {
          const bg =
            pokemonTypeColors[type.name] ?? "rgba(255,255,255,0.35)";
          return (
            <span
              key={type.name}
              className="type-badge"
              style={{ backgroundColor: bg }}
            >
              {type.name}
            </span>
          );
        })}
      </div>

      <h3>Base stats:</h3>
      <div className="stats-grid">
        {stats.map(({ stat, base_stat }) => {
          const statId =
            statMapping[stat.name as keyof typeof statMapping] ??
            `stat-${stat.name.replace(/-/g, "_")}`;
          return (
            <StatBlock
              key={stat.name}
              label={formatStatLabel(stat.name)}
              value={base_stat}
              statId={statId}
            />
          );
        })}
      </div>
    </section>
  );
};
