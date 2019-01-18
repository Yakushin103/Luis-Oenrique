// menu

var elements = document.querySelectorAll('.menu__link');
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('menu__link--active');
    elements[i].onclick = function (event) {
        removeClass();
        if (event.target.innerHTML === this.innerHTML) {
            this.classList.toggle("menu__link--active");
        }
    }
}

function removeClass(){
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('menu__link--active');
  }
}


// grafic

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  83],
          ['',  58],
          ['2005',  73],
          ['',  55],
          ['2006',  95],
          ['',  55],
          ['2007',  80],
          ['',  40]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
