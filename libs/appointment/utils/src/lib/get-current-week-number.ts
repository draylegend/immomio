export const getCurrentWeekNumber = (): number => {
  const current = new Date();
  const start = new Date(current.getFullYear(), 0, 1);
  const days = Math.floor(
    (current.getTime() - start.getTime()) / (24 * 60 * 60 * 1000),
  );

  return Math.ceil(days / 7) + 1;
};
