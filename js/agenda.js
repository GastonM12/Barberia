
//FUNCION RESETEAR Y VALIDAR CHECK INPUT

function inputRadio(accion) {
  if (accion === "validar")
  for (let radio of $inputRadio) {
if (radio.checked) {
  return radio.value;
}
}
else if (accion === "resetear") {
  for (i = 0; i < $inputRadio.length; i++) {
    $inputRadio[i].checked = false;
  }
}
}

//Agregar cantidad de turnos a la barra de navegacion

$botonCantidadDeTurnos.addEventListener("click", () => {
  if ($botonCantidadDeTurnos.classList.contains("subMenuCerrado")) {
    $botonCantidadDeTurnos.classList.replace(
      "subMenuCerrado",
      "subMenuAbierto"
    );
  } else if ($botonCantidadDeTurnos.classList.contains("subMenuAbierto")) {
    $botonCantidadDeTurnos.classList.replace(
      "subMenuAbierto",
      "subMenuCerrado"
    );
  }
});
  //Actualizar icono de Notificaciones
  let contador = 0;
  function actualizarNumeroDeNotificacion(calculo) {
    if (calculo === "suma") {
      $cantidadDeNotificaciones.style.display = "block";
      contador += 1;
      $cantidadDeNotificaciones.textContent = contador;
    } else if (calculo === "resta") {
      if (!contador == 0) {
        contador -= 1;
        $cantidadDeNotificaciones.textContent = contador;
      }
      if (contador === 0) {
        $cantidadDeNotificaciones.style.display = "none";
      }
    }
  }
  //Crear notificaciones en menu
function notificacionesMenu(dia, mes, hora) {
  let liNotificacion = document.createElement("li");
  liNotificacion.setAttribute("class", "notificacionMenu");
  liNotificacion.textContent = `El turno se confirmo para el ${dia} de ${mes} a las ${hora}hs`;
  agregarBoton();
  $cantidadDeTurnos.appendChild(liNotificacion);
}
//CREA UNA TARJETA DE RECORDATORIO CON DATOS EXTRAIDOS DEL LOCALSTORAGE DEPENDIENDO SI FUE AGENDADO CORRECTAMENTE O NO

function creadorDeTarjeta(frase, clase) {
  let listaDeTurnoLocal = JSON.parse(localStorage.getItem("listaTurnos"));
  let ultimoTurnoSeleccionado = listaDeTurnoLocal[listaDeTurnoLocal.length - 1];
  
  //desestructuracion
  let {
    mes: mesTurno,
    dia: diaTurno,
    hora: horaTurno,
  } = ultimoTurnoSeleccionado;

  let divTarjeta = document.createElement("div");
  let nuevoItems = document.createElement("p");

  //crea la tarjete del turno seleccionado
  if (clase === "verde") {
    divTarjeta.innerHTML = `<i class="fa-solid fa-check"style="color: #4cf71d;"></i>`;
    nuevoItems.textContent = `El turno se confirmo para el ${diaTurno} de ${mesTurno} a las ${horaTurno}hs`;
    divTarjeta.classList.add(clase);
    divTarjeta.appendChild(nuevoItems);
    divTarjeta.appendChild(agregarBoton());
    notificacionesMenu(diaTurno, mesTurno, horaTurno);
    $tarjeta.appendChild(divTarjeta);
    actualizarNumeroDeNotificacion("suma");
  }
  if (clase === "rojo") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: frase,
    });
  }
}

//Crear notificaciones en menu
function notificacionesMenu(dia, mes, hora) {
  let liNotificacion = document.createElement("li");
  liNotificacion.setAttribute("class", "notificacionMenu");
  liNotificacion.textContent = `El turno se confirmo para el ${dia} de ${mes} a las ${hora}hs`;
  agregarBoton();
  $cantidadDeTurnos.appendChild(liNotificacion);
}

// Funcion agregar boton eliminar
function agregarBoton() {
  let nuevoBoton = document.createElement("button");
  nuevoBoton.setAttribute("id", "botonEliminar");
  nuevoBoton.textContent = "Cancelar Turno";
  let contenido = $cantidadDeTurnos.children;
  
  //evento cancelar turno
  nuevoBoton.addEventListener("click", (e) => {
    let copiaDeListaDeTurno = [];
    for (i = 0; i < contenido.length; i++) {
      copiaDeListaDeTurno.push(contenido[i].textContent);
    }
    let items = e.target.parentElement;

    //posicion del turno
    let posicionDelTurno = copiaDeListaDeTurno.indexOf(
      items.children[1].textContent
      );
      //trae el nodo a borrar
      let elementoAEliminar = $cantidadDeTurnos.children[posicionDelTurno];
      
      //alerta para cancelar el turno
      Swal.fire({
        title: "Estas seguro que quieres cancelar el turno?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Cancelado!", "Su turno ha sido cancelado.", "success");
          //elimina el turno en la barra de navegacion
          $cantidadDeTurnos.removeChild(elementoAEliminar);
          //actualiza la cantidad de turnos asignados
          actualizarNumeroDeNotificacion("resta");
          //elimina la tarjeta de la seccion turno 
          $tarjeta.removeChild(items);
          
        }
      });
    });
    return nuevoBoton;
  }
  

  
  //AGREGA LOS TURNOS SELECCIONADOS A UN ARRAY PARA LUEGO AGREGARLO AL STORAGE
  
  let listaDeTurno = [];
  
  function agregarTurno(mes, dia, hora) {
    let obj = {
      mes,
      dia,
      hora,
    };
    listaDeTurno.push(obj);
  }
  
  //FUNCION EVENTO RESERVA
  $miForm.addEventListener("submit", reserva);
  
  function reserva(event) {
    event.preventDefault();
    
    let hora = inputRadio("validar");
    
    let formulario = event.target.children;
    
    let infoFecha = formulario[1].value;
    
    let fecha = infoFecha.split("-");
    let anio = fecha[0]

    let seleccionDeTurno = meses[fecha[1] - 1];
    
    let seleccionDeDia = fecha[2];
    
    let seleccionDeHora = Number(hora);
    console.log(seleccionDeTurno);
    //Agrega el turno al un array
    agregarTurno(seleccionDeTurno, seleccionDeDia, seleccionDeHora);
    
    //Se crea una fecha con el objeto Date para verificar que dia de la semana es
    let fechaDelTurno = new Date(
      anio,
      meses.indexOf(seleccionDeTurno),
      seleccionDeDia
  );
  
  let diaDeLaSemana = semana[fechaDelTurno.getDay()];
   console.log(diaDeLaSemana);
  if (calendarioAnual.some((e) => e.mes === seleccionDeTurno)) {
    // trae el objeto del mes selecionado
    let objetoMes = calendarioAnual.find((e) => e.mes === seleccionDeTurno);

    //compara si el dia seleccionado existe dentro del objeto mes
    if (objetoMes.dias.some((e) => e.dia === seleccionDeDia)) {
   
      //verifica que dia de la semana es para saber cuantas horas se trabajan
      if (diaDeLaSemana !== "Domingo") {
        //Verifica si el horario seleccionado existe dentro de las horas laborales
        console.log(calcualdorDeHoras(diaDeLaSemana).includes(seleccionDeHora));
        if (calcualdorDeHoras(diaDeLaSemana).includes(seleccionDeHora)) {
          localStorage.setItem("listaTurnos", JSON.stringify(listaDeTurno));
          creadorDeTarjeta(
            `El turno ah sido confirmado para el ${fechaDelTurno.toLocaleDateString()} a las ${hora}hs`,
            "verde"
          );
        } else {
          creadorDeTarjeta(
            `El horario del turno seleccionado no se encuentra disponible`,
            "rojo"
          );
        }
      }
    } else {
      creadorDeTarjeta(
        `La fecha del turno seleccionado no se encuentra disponible`,
        "rojo"
      );
    }
  } else {
    creadorDeTarjeta(
      `La fecha del turno seleccionado no se encuentra disponible`,
      "rojo"
    );
  }

  $inputRadio.checked = inputRadio("resetear");
  $inputFecha.value = "";
}
