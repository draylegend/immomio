export const getFirstWeekDay = (d = new Date()): Date => {
  d.setDate(d.getDate() - d.getDay());

  return d;
};
