
//var elems = document.querySelectorAll('.menu__link');
//
//
//for (var item = 0; item < elems.length; item++){
//
//  elems[item].addEventListener('click', function(event) {
//    event.target.classList.toggle('menu__link--active');
//  });
//}

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
