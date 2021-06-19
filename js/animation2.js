let animation2 = document.querySelectorAll(".animation2");

function MostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animation2.length; i++ ) {
    let alturaAnimado = animation2[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animation2[i].style.opacity = 1;
      animation2[i].classList.add("mostrar-izquierda");
    }
  }

}
 window.addEventListener('scroll', MostrarScroll);