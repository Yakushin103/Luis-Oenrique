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

//slider

var body = document.body;
var html = document.documentElement;
var bodyH = Math.max(body.scrollHeight, body.offsetHeight, body.getBoundingClientRect().height, html.clientHeight, html.scrollHeight, html.offsetHeight); // The max height of the body
var bodyScroll = bodyH - 800;

$(function() {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})


// при прокрутке окна (window)
$(window).scroll(function() {
//   если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>bodyScroll) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});
