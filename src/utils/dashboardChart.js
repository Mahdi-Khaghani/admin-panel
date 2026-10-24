import Chart from "chart.js/auto";

export const setDashboardChart = (labels, datapoints) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#0062ff",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            // text: 'زمان'
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: " میلیون تومان",
          },
          // suggestedMin: -10,
          // suggestedMax: 200
        },
      },
    },
  };

  const canvas = document.getElementById("myChart");

  if (!canvas) return;

  // اگر نمودار قبلی وجود داشت، آن را حذف کن
  const existingChart = Chart.getChart(canvas);

  if (existingChart) {
    existingChart.destroy();
  }

  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
};
