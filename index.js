// Digitar a quantidade de dezenas;
// Gerar a quantidade de dezenas escolhidas
// Colocar em ordem crescente

let quantidadeDezenas = parseInt(prompt("Digite a quantidade de dezenas:"))
let arrayDezenas = []

function gerarDezenas() {

    for (var i = 0; i < quantidadeDezenas; i++){
        arrayDezenas.push(Math.floor(Math.random() * 60) + 1)  
    }

    arrayDezenas.sort(function(a, b){return a - b});
    alert("As dezenas geradas foram: " + arrayDezenas)
}

gerarDezenas()