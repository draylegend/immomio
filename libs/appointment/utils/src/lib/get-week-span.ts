export const getWeekSpan = (weekNumber: number, year: number) => {
  const start = new Date(year, 0, 1 + (weekNumber - 1) * 7);

  while (start.getDay() !== 0) {
    start.setDate(start.getDate() - 1);
  }

  const end = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate() + (8 - start.getDay()),
  );

  return { start, end };
};
