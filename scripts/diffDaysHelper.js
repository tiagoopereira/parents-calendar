function getDiffDays(firstDate, secondDate) {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);

  let diffTime = Math.abs(date2 - date1);
  diffTime = (date2 < date1) ? -diffTime : diffTime;

  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
