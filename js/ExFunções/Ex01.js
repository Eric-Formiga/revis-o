let naveName = prompt("qual o nome da nave?")
let velInicial = 0
let escolherFuncao 

function mostrarMenu() {
    let opcao
    while (opcao != 1 && opcao != 1 && opcao != 2 && opcao != 3 &&opcao != 4 ) {
        opcao = prompt("Oque deseja fazer?\n" +
        "1 - Acelerar a nave em 5km/s\n" +
        "2 - Desacelerar a nave em 5km/s\n" +
        "3 - Imprimir dados de bordo\n" +
        "4 - Sair do programa" )
    }
    return opcao
}

function Acelerar(velocidade){
    let novaVel = velocidade + 5
    return novaVel
}

function Desacelerar(velocidade){
    let novaVel = velocidade -5
    if(novaVel < 0){
        novaVel = 0
    }
    return novaVel
}

function mostrarDadosDeBordo(nome, velocidade){
    alert("Espaçonave: " + nome + "\nVelocidade: " + velocidade +"km/s")
}

do {
    escolherFuncao = mostrarMenu()
    switch(escolherFuncao){
        case "1":
            velInicial = Acelerar(velInicial)
        break
        case "2":
            velInicial = Desacelerar(velInicial)
        break
        case "3":
        mostrarDadosDeBordo(naveName, velInicial)
        break
        default:
        alert("Encerrando programa de bordo")
    }
} while( escolherFuncao != 4)

