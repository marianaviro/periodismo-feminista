import React from 'react';

const BarChart = () => {
  const container = React.useRef(null);

  React.useEffect(() => {
    const ctx = container.current.getContext("2d");

    // var c = function(context) {
    //   return grd;
    // }

    var grd = ctx.createLinearGradient(0,200,0,0);
    grd.addColorStop(0,"#ff7f2c");
    grd.addColorStop(1,"#ff4adc");

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
            backgroundColor: grd,
            borderColor: "transparent",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      options: {
        tooltips: {
            mode: 'point'
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }, []);

  return <canvas ref={container}></canvas>;
};
export default BarChart
