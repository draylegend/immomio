export const getWeekSpan = (week: number, year: number) => {
  const start = new Date(year, 0, 1 + (week - 1) * 7);
  const end = new Date();

  while (start.getDay() !== 0) {
    start.setDate(start.getDate() - 1);
  }

  end.setDate(start.getDate() + 6);

  return { start, end };
};

// const getDateOfWeek = (week: number, year: number) => {
//   const d = new Date(year, 0, 1, 1);
//   const dayMs = 24 * 60 * 60 * 1000;
//   const offSetTimeStart = dayMs * (d.getDay() - 1);
//   const w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart;
//   const start = new Date(w);
//   const end = new Date(w + 518400000);
//
//   return { start, end };
// };
