// chart-config.js
function renderMoodChart(data) {
  const ctx = document.getElementById('moodChart').getContext('2d');
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.dates,
      datasets: [{
        label: 'Mood Level',
        data: data.values,
        borderColor: 'var(--accent-pink)',
        backgroundColor: 'rgba(255, 133, 162, 0.1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          suggestedMin: 1,
          suggestedMax: 5
        }
      }
    }
  });
}