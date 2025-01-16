const ctx = document.getElementById('costChart').getContext('2d');
const chartData = {
  labels: cumulativeCosts.map(entry => entry.day),
  datasets: [{
    label: 'Cumulative Costs',
    data: cumulativeCosts.map(entry => entry.cost),
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: false
  }]
};

new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days Relative to Failure'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Cumulative Cost ($)'
        }
      }
    }
  }
});
