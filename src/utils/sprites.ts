const OFFICIAL_ARTWORK_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export const getOfficialArtworkUrl = (id: number): string => {
  return `${OFFICIAL_ARTWORK_BASE_URL}/${id}.png`;
};
