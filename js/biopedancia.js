google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Meses', 'Peso', 'Gordura', 'Músculo'],
            ['Jan',  59,      28,   23.2],
            ['Abr',  56,      18,   25.3],
            ['Ago',  58,      26,   23.4],
            ['Dez',  60,      19,   26.6]
         ]);


        var options = {
            title: 'Histórico de Composição Corporal',

            // Gives each series an axis that matches the vAxes number below.
            series: {
              0: {targetAxisIndex: 0},
              1: {targetAxisIndex: 0},
              2: {targetAxisIndex: 0}
            },
            
            width: 500,
            height: 260
          };
          

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }