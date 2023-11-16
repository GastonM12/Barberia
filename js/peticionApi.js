
//Hace una peticion al archivo json para obtener los horarios disponibles y por cada horario disponible crea un boton para seleccionar

$inputFecha.addEventListener("change", (event) => {
  event.preventDefault();
  $check.innerHTML = " ";
  $tituloHorarios.style.display = "none";
  $check.style.display = "none";
  $loader.style.display = "block";

  //obtiene el valor del input date y lo vuelve un arreglo
  let fecha = $inputFecha.value.split("-");
  let [anio, mes, dia] = fecha;
  let indiceMes = meses[mes - 1];
  let fechaDelTurno = new Date(anio, meses.indexOf(indiceMes), dia);
  //se obtiene el dia de la semana para poder verificar si el dia elegido es domingo o sabado
  let diaDeLaSemana = semana[fechaDelTurno.getDay()];

  fetch(`json/baseDeDatos.json`)
    .then((dato) => {
      return dato.json();
    })
    .then((res) => {
      return horariosSemanales(diaDeLaSemana, res);
    })
    .then((res) => {
      setTimeout(() => {
        $tituloHorarios.style.display = "block";
        $check.style.display = "block";
        $loader.style.display = "none";
        crearCheck(res);
      }, 1500);
    });
});

//esta funcion es la encargada de que lista de horarios se van a mostrar en pantalla
function horariosSemanales(diaDeLaSemana, array) {
  if (diaDeLaSemana === "Sabado") {
    //si es sabado solo devolvera 4 horas
    return array[5].horarios;
  } else if (diaDeLaSemana === "Domingo") {
    //si es domingo va a devolver una alerta
    return Swal.fire({
      icon: "info",
      title: "Los dias Domingo permanecemos cerrado",
      backdrop: `
        -webkit-border-radius: 15px;
        border-radius: 15px;
        background: linear-gradient(rgba(255, 255, 255, 0.511), transparent)
        `,
    });
  } else {
    //si es un dia de lunes a viernes devolvera 8 horas
    return array[0].horarios;
  }
}

//CREA INPUTS TIPO CHECK
function crearCheck(horario) {
  $tituloHorarios.textContent = "Seleccione el horario";
  //creara un input por cada elemento que hay en el arreglo de la peticion ademas le asignara un label, una clase y un id a cada uno
  for (const numero of horario) {
    let idInput = `input${numero}`;
    let liInputCheck = document.createElement("li");
    let inputCheck = document.createElement("input");
    let labelInputCheck = document.createElement("label");
    labelInputCheck.setAttribute("class", "labelCheck");
    labelInputCheck.textContent = numero;
    liInputCheck.setAttribute("class", "containerCheck");
    inputCheck.setAttribute("type", "radio");
    inputCheck.setAttribute("value", numero);
    inputCheck.setAttribute("class", "typeCheck");
    inputCheck.setAttribute("id", idInput);
    inputCheck.setAttribute("name", "hora");
    labelInputCheck.setAttribute("for", idInput);
    liInputCheck.appendChild(inputCheck);
    liInputCheck.appendChild(labelInputCheck);
    $check.appendChild(liInputCheck);
  }
}
