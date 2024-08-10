//funciones
function aliatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function elegir(jugada){
    resultado = ""
    if( jugada == 1)
        resultado = "Piedra"
    else if(jugada == 2)
        resultado = "Papel"
    else if(jugada == 3)
        resultado = "Tijera"
        return resultado
}
// 1 piedra, 2 papel, 3 tijera
let jugador = 0
let computador = 0
let ganar = 0
let perder = 0
while(ganar < 3 && perder < 3){
    computador=aliatorio(1,3)
    jugador=prompt("Elige una option: 1 piedra, 2 papel, 3 tijera")
    alert("El jugador eligio " + elegir(jugador))
    alert("El Pc eligio " + elegir(computador))
    if(jugador == computador){
        alert("empate")
    }
    else if(jugador == 1  && computador == 3 || jugador == 2 && computador == 1 || jugador == 3 && computador == 2){
        alert("Ganaste")
        ganar +=1
    }
    else{
        alert("perdiste")
        perder+=1
    }
}
alert("el total de ganadas fue " + ganar + " y el total de perdidas fue " + perder )