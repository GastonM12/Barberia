
class Calendario {
    constructor(anio, mes, dias) {
      this.anio = anio;
      this.mes = mes;
      this.dias = dias;
    }
  }
  let anio = 2023;
  //Meses
  let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  //Horarios laborales
  let horarios = [8, 9, 10, 11, 12, 16, 17, 18, 19, 20];
  //Semanas
  let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  //Meses del calendario
  let calendarioAnual = [
    (Enero = new Calendario(anio, meses[0], calculadorDeDias(meses[0]))),
    (Febrero = new Calendario(anio, meses[1], calculadorDeDias(meses[1]))),
    (Marzo = new Calendario(anio, meses[2], calculadorDeDias(meses[2]))),
    (Abril = new Calendario(anio, meses[3], calculadorDeDias(meses[3]))),
    (Mayo = new Calendario(anio, meses[4], calculadorDeDias(meses[4]))),
    (Junio = new Calendario(anio, meses[5], calculadorDeDias(meses[5]))),
    (Julio = new Calendario(anio, meses[6], calculadorDeDias(meses[6]))),
    (Agosto = new Calendario(anio, meses[7], calculadorDeDias(meses[7]))),
    (Septiembre = new Calendario(anio, meses[8], calculadorDeDias(meses[8]))),
    (Octubre = new Calendario(anio, meses[9], calculadorDeDias(meses[9]))),
    (Noviembre = new Calendario(anio, meses[10], calculadorDeDias(meses[10]))),
    (Diciembre = new Calendario(anio, meses[11], calculadorDeDias(meses[11]))),
  ];


//Desestructuracion del array semana
  let [domingo,lunes,martes,miercoles,jueves,viernes,sabado] = semana
 

    
 