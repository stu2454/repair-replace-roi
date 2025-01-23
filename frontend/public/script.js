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

  // Calculate costs
  const typicalDailyCost = (weekdayRate * 5 + saturdayRate + sundayRate) * typicalHours / 7;
  const additionalDailyCost = (weekdayRate * 5 + saturdayRate + sundayRate) * (typicalHours + additionalHours) / 7;

  // Prepare data for the chart
  const labels = [];
  const cumulativeCostsNoBreakdown = [];
  const cumulativeCostsWithBreakdown = [];
  let costNoBreakdown = 0;
  let costWithBreakdown = replacementCost; // Start with replacement cost for repair scenario

  for (let i = 0; i <= additionalDays; i++) {
    labels.push(i);
    costNoBreakdown += additionalDailyCost;
    costWithBreakdown += typicalDailyCost;

    cumulativeCostsNoBreakdown.push(costNoBreakdown);
    cumulativeCostsWithBreakdown.push(costWithBreakdown);
  }

  // Total costs using the cumulative array
  const totalCostWithoutReplacement = cumulativeCostsNoBreakdown[cumulativeCostsNoBreakdown.length - 1];
  const totalCostWithReplacement = cumulativeCostsWithBreakdown[cumulativeCostsWithBreakdown.length - 1];

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
          label: 'Without Replacement',
          data: cumulativeCostsNoBreakdown,
          borderColor: 'blue',
          borderDash: [10, 5],
          fill: false,
        },
        {
          label: 'With Immediate Replacement',
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

// Handle potentially loing wait times while Render spins up
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const appContent = document.getElementById("app-content");

  // Check if the backend is ready
  fetch('/status')
    .then(response => {
      if (response.ok) {
        loadingScreen.style.display = "none";
        appContent.style.display = "block";
      } else {
        // Retry after a delay if the backend is not ready
        setTimeout(() => {
          loadingScreen.style.display = "none";
          appContent.style.display = "block";
        }, 50000); // 50 seconds delay
      }
    })
    .catch(() => {
      // Handle errors (e.g., network issues)
      setTimeout(() => {
        loadingScreen.style.display = "none";
        appContent.style.display = "block";
      }, 50000); // 50 seconds delay
    });
});
