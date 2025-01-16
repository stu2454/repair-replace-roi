document.getElementById('roiForm').addEventListener('submit', function (e) {
  e.preventDefault();
  updateChartAndResults();
});

function updateChartAndResults() {
  const weekdayRate = parseFloat(document.getElementById('weekdayRate').value);
  const saturdayRate = parseFloat(document.getElementById('saturdayRate').value);
  const sundayRate = parseFloat(document.getElementById('sundayRate').value);
  const typicalHours = parseFloat(document.getElementById('typicalHours').value);
  const additionalHours = parseFloat(document.getElementById('additionalHours').value);
  const additionalDays = parseInt(document.getElementById('additionalDays').value, 10);
  const replacementCost = parseFloat(document.getElementById('replacementCost').value);

  if (
    [weekdayRate, saturdayRate, sundayRate, typicalHours, additionalHours, additionalDays, replacementCost].some(
      (val) => isNaN(val)
    )
  ) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const typicalDailyCost = (weekdayRate * 5 + saturdayRate + sundayRate) * typicalHours / 7;
  const additionalDailyCost = (weekdayRate * 5 + saturdayRate + sundayRate) * (typicalHours + additionalHours) / 7;

  const labels = [];
  const cumulativeCostsNoBreakdown = [];
  const cumulativeCostsWithBreakdown = [];
  let costNoBreakdown = 0;
  let costWithBreakdown = 0;

  // Generate data for failure-to-replacement period
  for (let i = 0; i <= additionalDays; i++) {
    labels.push(i);
    costNoBreakdown += typicalDailyCost;
    costWithBreakdown += additionalDailyCost;

    cumulativeCostsNoBreakdown.push(costNoBreakdown);
    cumulativeCostsWithBreakdown.push(costWithBreakdown);
  }

  // Debugging
  console.log("Labels:", labels);
  console.log("Cumulative Costs (No Breakdown):", cumulativeCostsNoBreakdown);
  console.log("Cumulative Costs (With Breakdown):", cumulativeCostsWithBreakdown);

  // Total costs for failure-to-replacement period
  const totalCostWithoutReplacement = additionalDailyCost * additionalDays;
  const totalCostWithReplacement = replacementCost;

  // Calculate savings and ROI
  const savingsDuringFailurePeriod = totalCostWithoutReplacement - totalCostWithReplacement;
  const roiDuringFailurePeriod = ((savingsDuringFailurePeriod / totalCostWithReplacement) * 100).toFixed(2);

  // Update results section
  document.getElementById('totalCost').textContent = totalCostWithoutReplacement.toFixed(2);
  document.getElementById('immediateCost').textContent = totalCostWithReplacement.toFixed(2);
  document.getElementById('savings').textContent = savingsDuringFailurePeriod.toFixed(2);
  document.getElementById('roi').querySelector('span').textContent = roiDuringFailurePeriod;

  // Generate chart
  const ctx = document.getElementById('costChart').getContext('2d');
  if (window.costChart && typeof window.costChart.destroy === 'function') {
    window.costChart.destroy();
  }
  window.costChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels, // Days relative to failure
      datasets: [
        {
          label: 'No Breakdown',
          data: cumulativeCostsNoBreakdown,
          borderColor: 'blue',
          borderDash: [10, 5],
          fill: false,
        },
        {
          label: 'With Breakdown',
          data: cumulativeCostsWithBreakdown,
          borderColor: 'red',
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        annotation: {
          annotations: {
            failureLine: {
              type: 'line',
              xMin: 0, // Align with Day 0 (Failure)
              xMax: 0,
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                content: 'Failure Occurred',
                enabled: true,
                position: 'end',
                backgroundColor: 'rgba(255, 165, 0, 0.8)',
              },
            },
            recoveryLine: {
              type: 'line',
              xMin: additionalDays, // Align with Recovery Day
              xMax: additionalDays,
              borderColor: 'green',
              borderWidth: 2,
              label: {
                content: 'Recovery',
                enabled: true,
                position: 'end',
                backgroundColor: 'rgba(0, 255, 0, 0.8)',
              },
            },
          },
        },
      },
      scales: {
        x: { title: { display: true, text: 'Days Relative to Failure' } },
        y: { title: { display: true, text: 'Cumulative Cost ($)' } },
      },
    },
  });
}

// Handle ROI Help Pop-up
document.getElementById('roiHelpButton').addEventListener('click', function () {
  document.getElementById('roiModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('roiModal').style.display = 'none';
});
