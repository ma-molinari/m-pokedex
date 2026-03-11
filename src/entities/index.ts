interface NamedAPIResource {
  name: string;
  url: string;
}

interface APIResource {
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
  }[];
  forms: NamedAPIResource[];
  game_indices: {
    game_index: number;
    version: NamedAPIResource;
  }[];
  held_items: {
    item: NamedAPIResource;
    version_details: {
      rarity: number;
      version: NamedAPIResource;
    }[];
  }[];
  location_area_encounters: string;
  moves: {
    move: NamedAPIResource;
    version_group_details: {
      level_learned_at: number;
      version_group: NamedAPIResource;
      move_learn_method: NamedAPIResource;
    }[];
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string;
      };
    }
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }[];
  types: {
    slot: number;
    type: NamedAPIResource;
  }[];
}

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedAPIResource;
  }[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource | null;
  evolution_chain: APIResource;
  habitat: NamedAPIResource | null;
  generation: NamedAPIResource;
  names: {
    name: string;
    language: NamedAPIResource;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
  }[];
  form_descriptions: {
    description: string;
    language: NamedAPIResource;
  }[];
  genera: {
    genus: string;
    language: NamedAPIResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: NamedAPIResource;
  }[];
}

export interface PokemonType {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
  };
  past_damage_relations: {
    generation: NamedAPIResource;
    damage_relations: {
      no_damage_to: NamedAPIResource[];
      half_damage_to: NamedAPIResource[];
      double_damage_to: NamedAPIResource[];
      no_damage_from: NamedAPIResource[];
      half_damage_from: NamedAPIResource[];
      double_damage_from: NamedAPIResource[];
    };
  }[];
  game_indices: {
    game_index: number;
    generation: NamedAPIResource;
  }[];
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource;
  names: {
    name: string;
    language: NamedAPIResource;
  }[];
  pokemon: {
    slot: number;
    pokemon: NamedAPIResource;
  }[];
  moves: NamedAPIResource[];
}
