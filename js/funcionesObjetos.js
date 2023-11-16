
//Crea objetos con la cantidad de dias de cada mes con sus respecivas horas laborales
function calculadorDeDias(valor) {
    let cantidadDeDias = [
      { dia: "01", horasLaborales: horarios },
      { dia: "02", horasLaborales: horarios },
      { dia: "03", horasLaborales: horarios },
      { dia: "04", horasLaborales: horarios },
      { dia: "05", horasLaborales: horarios },
      { dia: "06", horasLaborales: horarios },
      { dia: "07", horasLaborales: horarios },
      { dia: "08", horasLaborales: horarios },
      { dia: "09", horasLaborales: horarios },
      { dia: "10", horasLaborales: horarios },
      { dia: "11", horasLaborales: horarios },
      { dia: "12", horasLaborales: horarios },
      { dia: "13", horasLaborales: horarios },
      { dia: "14", horasLaborales: horarios },
      { dia: "15", horasLaborales: horarios },
      { dia: "16", horasLaborales: horarios },
      { dia: "17", horasLaborales: horarios },
      { dia: "18", horasLaborales: horarios },
      { dia: "19", horasLaborales: horarios },
      { dia: "20", horasLaborales: horarios },
      { dia: "21", horasLaborales: horarios },
      { dia: "22", horasLaborales: horarios },
      { dia: "23", horasLaborales: horarios },
      { dia: "24", horasLaborales: horarios },
      { dia: "25", horasLaborales: horarios },
      { dia: "26", horasLaborales: horarios },
      { dia: "27", horasLaborales: horarios },
      { dia: "28", horasLaborales: horarios },
      { dia: "29", horasLaborales: horarios },
      { dia: "30", horasLaborales: horarios },
      { dia: "31", horasLaborales: horarios },
    ];
    if (valor === "febrero") {
      cantidadDeDias.splice(28, 3);
     return cantidadDeDias
    } else if (
      valor === "abril" ||
      valor === "junio" ||
      valor === "septiembre" ||
      valor === "noviembre"
    ) {
      cantidadDeDias.pop();
      return cantidadDeDias
    } else {
      return cantidadDeDias;
    }
  
  }
  
  //Crea la cantidad de horas laborales de cada dia
  function calcualdorDeHoras(diaDeLaSemana) {
    if (diaDeLaSemana === "Sabado") {
      horarios.splice(5, 5);
      return horarios;
    } else if (diaDeLaSemana === "Domingo") {
      return Swal.fire({
        icon: 'info',
        title: 'Los dias Domingo permanecemos cerrado',
        backdrop: `
        -webkit-border-radius: 15px;
        border-radius: 15px;
        background: linear-gradient(rgba(255, 255, 255, 0.511), transparent)
    `
      })
  
    } else {
      return horarios;
    }
  }
  