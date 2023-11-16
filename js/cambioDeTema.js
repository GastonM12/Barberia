
//Funcion cambio de tema de la Agenda
let $items = document.getElementById("contenedorIconoTema");
let $style = document.documentElement.style;
let $botonCambioDeTema = document.getElementById("botonCambioDeTema");

//ACTUALIZA A COLOR CLARO LA AGENDAD DE TURNO
const temaOscuro = () =>{
  $style.setProperty("--prymaryColor-bg-color", "rgba(227, 227, 227, 0.773)");
  $style.setProperty("--textoColor-bg-color", "black");
  $botonCambioDeTema.textContent = "Modo Traslucido";
  $items.innerHTML = `<i class="fa-regular fa-sun iconoTema" style="color: #ffffff;">`;
}

//ACTUALIZA A COLOR CLARO LA AGENDAD DE TURNO
const temaClaro = ()=>{
  $style.setProperty("--prymaryColor-bg-color", " linear-gradient(rgba(255, 255, 255, 0.111),transparent)");
  $style.setProperty("--textoColor-bg-color", "white");
  $botonCambioDeTema.textContent = "Modo Claro";
  $items.innerHTML = `<i class="fa-regular fa-moon iconoTema" style="color: #ffffff;"></i>`;
}

//EVENTO ACTUALIZADOR DEL COLOR
$botonCambioDeTema.addEventListener("click", () => {
  localStorage.setItem("tema",$botonCambioDeTema.checked)
$botonCambioDeTema.checked === true ? temaOscuro():temaClaro()

});

//GUARDA EL COLOR DEL TEMA ELEGIDO PARA CUANDO REAGUE LA PAGINA SIGA ESTANDO EL MISMO COLOR ELEGIDO
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("tema")===null){
    localStorage.setItem("tema",$botonCambioDeTema.checked)
  }
  if(localStorage.getItem("tema")=== "false"){
    temaClaro()
  }
  if (localStorage.getItem("tema")=== "true") {
    temaOscuro()
    $botonCambioDeTema.checked = true
  }
})


