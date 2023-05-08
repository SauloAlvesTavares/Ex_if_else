/* Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a 
sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente 
em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações 
entr.e 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!" */

let inputEspecie = document.getElementById("especie")
let inputPopulacao = document.getElementById("populacao")

let inputSituacao = document.getElementById("situacao")

function total(){

    if (inputPopulacao.value > 200 && inputPopulacao.value < 500 ){

        inputSituacao.value = "Critico"
    }
    else if (inputPopulacao.value > 500 && inputPopulacao.value < 1000){
       
        inputSituacao.value = "Perigo"

    }
    else if (inputPopulacao.value > 1000 && inputPopulacao.value < 5000){

        inputSituacao.value = "Vulnerável"

    }

}