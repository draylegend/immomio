export const getWeekNumber = (date = new Date()): number => {
  const start = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000),
  );

  return Math.ceil(days / 7) + 1;
};
