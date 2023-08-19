export const getDifferenceOfDaysBetweenTwoDates = ({startDate, endDate}) => {
  const end = new Date(endDate);
  const start = new Date(startDate);
  const timeDifference = end - start;
  const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return differenceInDays;
};
