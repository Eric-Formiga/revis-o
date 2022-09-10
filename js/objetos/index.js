

let spaceShip ={
     velocity: 0, 
     speedUp: function(acceleration){
        this.velocity += acceleration
     },
     maxVelocity:0
}

function registerSpaceship(){
    spaceShip.name = prompt("Qual é o nome da nave?")
    spaceShip.type = prompt("Qual é o tipo da nave?")
    spaceShip.maxVelocity = Number(prompt("Informe a velocidade maxima da nave (km/s)"))
}

function acelerate(){
    let acceleration = Number(prompt("Quanto voçê quer acelerar? (km/s)"))
    spaceShip.speedUp(acceleration)
    if(spaceShip.velocity > spaceShip.maxVelocity)[
        alert("VELOCIDADE MAXIMA ULTRAPASSADA! \n Velocidade da Nave: " + spaceShip.velocity + "km/s\n" + 
        "Velocidade maxima da NAve: " + spaceShip.maxVelocity + "km/s")
    ]
}

function stop(){
    alert("Nome: " + spaceShip.name + 
          "\nTipo: " + spaceShip.type + 
          "\nVelocidade da Nave: " + spaceShip.velocity) + 
          "\nVelocidade maxima da Nave: " + spaceShip.maxVelocity
    
}

function showmenu(){
    let chosenOption
    do{ 
        chosenOption = prompt("voçê deseja:\n 1 - Acelerar\n2- Parar")
        switch(chosenOption){
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("opção invalida")
        }
    }while(chosenOption != "2")
}

registerSpaceship()
showmenu()