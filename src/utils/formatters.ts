export const formatId = (id: number): string => {
  return `#${String(id).padStart(4, '0')}`;
};

export const toMetric = (value: number): number => {
  return value / 10;
};
