import React from 'react';
import ReactDOM from 'react';

const BarChart = () => {
  const container = React.useRef(null);

  React.useEffect(() => {
    const ctx = container.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            // Podrias pasar todo esto como props
            label: "My First dataset",
            backgroundColor: "#ff4adc",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      options: {}
    });
  }, []);

  return <canvas ref={container}></canvas>;
};
export default BarChart
