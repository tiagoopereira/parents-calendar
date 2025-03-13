function getCalendarData() {
  const year = parseInt(document.getElementById('year').value);
  const month = parseInt(document.getElementById('month').value);
  const day = parseInt(document.getElementById('day').value);

  if (!year && !month && !day) {
    return null;
  }

  if (year && month && day) {
    return getCalendarPerFullDate(year, month, day);
  }

  if (year && month) {
    return getCalendarPerYearAndMonth(year, month);
  }

  return getCalendarPerYear(year);
}

function displayResults() {
  const data = getCalendarData();
  let resultHTML = '';

  resultHTML += generateTable(data);

  document.getElementById('result').innerHTML = resultHTML;
}

function generateTable(data) {
  if (data.length === 0) {
    return '<p>Nenhum resultado encontrado.</p>';
  }

  let tableHTML = '<table>';
  tableHTML += `<thead>
    <tr>
      <th>Data</th>
      <th>Responsável</th>
    </tr>
  </thead>`;
  tableHTML += '<tbody>';
  
  data.forEach(item => {
      tableHTML += `<tr>
        <td>${item.date}</td>
        <td>${item.parent}</td>
      </tr>`;
  });

  tableHTML += '</tbody></table>';
  return tableHTML;
}