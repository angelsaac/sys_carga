document.onload(mueveReloj());


function mueveReloj(){

    momentoActual = new Date()
    dia = momentoActual.getDay();
    mes = momentoActual.toLocaleString('default', { month: 'long' })
    anio = momentoActual.getFullYear();
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (hora < 10) {
        hora = "0"+ hora;
    }
    if (minuto <10) {
        minuto = "0" + minuto;
    }
    if (segundo <10) {
        segundo = "0" +segundo;
    }
    horaImprimible = hora + " : " + minuto + " : " + segundo

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.getElementById("fecha").innerHTML = `${dia}/${mes}/${anio}`;

    const tiempo = document.getElementById("horaImprimible");
    document.getElementById("anio").innerHTML = anio;
    tiempo.innerHTML = horaImprimible;
    setTimeout("mueveReloj()",1000)
}

