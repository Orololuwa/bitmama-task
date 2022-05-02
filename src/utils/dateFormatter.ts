const dateFormatter = (date: Date): string => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const now = new Date(Date.now());

  if (year === now.getFullYear() && month === now.getMonth()) {
    const dayDifference = now.getDay() - day;

    return dayDifference === 0
      ? "Updated today"
      : `Updated ${dayDifference} day(s) ago`;
  }

  return `Updated on ${date.toDateString()}`;
};

export default dateFormatter;
