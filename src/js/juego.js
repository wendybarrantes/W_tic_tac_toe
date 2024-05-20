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

function movimientoCasillas () { 
    contenedores.forEach((casilla)=> casilla.addEventListener("click", ()=>{
        if (casilla.innerHTML == "") {
            casilla.innerHTML = "✖️"
        }else{
            alert("OCUPADO")
        }

    }))
}
function movimientoPc() {
    let contenedoresVacios = contenedores.filter((casilla) => casilla.innerHTML == "")
    let aleatorio =  Math.floor(Math.random() * );
}

movimientoCasillas()





