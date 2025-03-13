const parents = {
  father: 'Tiago',
  mother: 'Bia'
};

function getCalendar(finalDate) {
  console.log('FINAL DATE:', finalDate);

  let currentParent = parents.father;

  const firstDate = new Date(2025, 0, 1);
  console.log('FIRST DATE:', firstDate);

  const changeDay = 5;
  const diffDays = getDiffDays(firstDate, finalDate);
  console.log('DIFF DAYS:', diffDays);

  const dates = [];

  for (let i = 0; i <= diffDays; i++) {
    let weekDay = firstDate.getDay();
    console.log('WEEK DAY:', weekDay);

    if (weekDay === changeDay) {
      currentParent = (currentParent === parents.father) ? parents.mother : parents.father;
    }

    dates.push({
      date: firstDate.toLocaleDateString('pt-BR'),
      parent: currentParent
    });

    firstDate.setDate(firstDate.getDate() + 1);
  }

  console.log('DATES:', dates)

  return dates;
}

function getCalendarPerYear(year) {
  const finalDate = new Date(year, 12, 0);
  return getCalendar(finalDate);
}

function getCalendarPerYearAndMonth(year, month) {
  const finalDate = new Date(year, month, 0);
  const dates = getCalendar(finalDate);
  let formattedMonth = (month < 10) ? `0${month}` : month;

  return dates.filter(date => date.date.includes(`/${formattedMonth}/${year}`));
}

function getCalendarPerFullDate(year, month, day) {
  const finalDate = new Date(year, month - 1, day);
  const dates = getCalendar(finalDate);

  return dates.filter(date => date.date === finalDate.toLocaleDateString('pt-BR'));
}