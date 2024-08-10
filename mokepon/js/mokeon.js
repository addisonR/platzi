function iniciarjuego(){
    let boton_mascota_jugador = document.getElementById('boton-seleccionar')
    boton_mascota_jugador.addEventListener('click', selecionar_mascota_jugador)
}
function selecionar_mascota_jugador(){
    let hipodoge = document.getElementById("hipodoge");
    let capipepo = document.getElementById("capipepo");
    let ratigueya = document.getElementById("ratigueya");
    let mascota_seleccionada_jugador = document.getElementById("nombre-mascota-jugador");

    if(hipodoge.checked){
        alert("se seleciono la mascota hipodoge")
        mascota_seleccionada_jugador.innerHTML = "hipodoge"
    }
    else if(capipepo.checked){
        alert("se seleciono la mascota capipepo")
        mascota_seleccionada_jugador.innerHTML = "capipepo"
    }
    else if(ratigueya.checked){
        alert("se seleciono la mascota ratigueya")
        mascota_seleccionada_jugador.innerHTML = "ratigueya"
    }
    else{
        alert("se seleciono la mascota sniby")
    }    
}

window.addEventListener('load', iniciarjuego)