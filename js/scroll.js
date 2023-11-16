let $btnScrollPrincipal = document.getElementById("btnPrincipal");
let $btnScrollPresentacion = document.getElementById("btnPresentacion");
let $btnScrollServicio = document.getElementById("btnServicio");
let $btnScrollPrecio = document.getElementById("btnPrecio");
let $btnScrollNosotros = document.getElementById("btnNosotros");
let $btnPrecio = document.getElementsByClassName("btnPrecio");
$btnScrollPrincipal.addEventListener("click", scroll);
$btnScrollPresentacion.addEventListener("click", scroll);
$btnScrollServicio.addEventListener("click", scroll);
$btnScrollPrecio.addEventListener("click", scroll);
$btnScrollNosotros.addEventListener("click", scroll);

//asignar el evento a todos los elementos que tengas la clase btnPrecio
for (i = 0; i < $btnPrecio.length; i++) {
  $btnPrecio[i].addEventListener("click", (event) => {
    console.log(event.target.children);
    window.scrollTo({
      behavior: "smooth",
      top: 2400,
    });
  });
}

function scroll() {
  window.scrollTo({
    behavior: "smooth",
    top: 4050,
  });
}
