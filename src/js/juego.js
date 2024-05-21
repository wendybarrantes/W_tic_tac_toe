    let casilla_1 = document.getElementById("casilla_1")
    let casilla_2 = document.getElementById("casilla_2")
    let casilla_3 = document.getElementById("casilla_3")
    let casilla_4 = document.getElementById("casilla_4")
    let casilla_5 = document.getElementById("casilla_5")
    let casilla_6 = document.getElementById("casilla_6")
    let casilla_7 = document.getElementById("casilla_7")
    let casilla_8 = document.getElementById("casilla_8")
    let casilla_9 = document.getElementById("casilla_9")

    let contenedores = [casilla_1, casilla_2, casilla_3,casilla_4,casilla_5,casilla_6,casilla_7,
        casilla_8, casilla_9]

// casilla_1.innerHTML = "x"

//forEach : para cada.
function movimientoCasillas () { 
    contenedores.forEach((casilla)=> casilla.addEventListener("click", ()=>{
        if (casilla.innerHTML == "") {
            casilla.innerHTML = "✖️"
            movimientoPc()
        }
        if (ganador()){
            ganador()

        }


    }))
}
function movimientoPc() {
    let contenedoresVacios = contenedores.filter((casilla) => casilla.innerHTML == "")
    let aleatorio =  Math.floor(Math.random() * contenedoresVacios.length);
    console.log(aleatorio);
    if (contenedoresVacios.length > 0) {
        contenedoresVacios[aleatorio].innerHTML="⭕"
    }
}
movimientoCasillas()

function ganador() {

    let posicionesGanadoras = [
        [0,1,2],[3,4,5],[6,7,8], //filas
        [0,3,6],[1,4,7],[2,5,8] //columnas
        ,[0,4,8],[6,4,2]        //diagonales        
    ]
    for (const iterar of posicionesGanadoras) {
        [pos1,pos2,pos3] = iterar
    if (contenedores[pos1].innerHTML && contenedores[pos1].innerHTML == contenedores[pos2].innerHTML && contenedores[pos1].innerHTML == contenedores[pos3].innerHTML ) {
        console.log("Entre");           
        return true
            
        }
    }
        return false
}





