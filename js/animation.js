let animation = document.querySelectorAll(".animation");

function MostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animation.length; i++ ) {
    let alturaAnimado = animation[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animation[i].style.opacity = 1;
      animation[i].classList.add("mostrar-arriba");
      
    }
  }

}
 window.addEventListener('scroll', MostrarScroll);



