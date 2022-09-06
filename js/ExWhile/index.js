
let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave!")

chosenOption = prompt("Deseja entrar na dobra? \n1 - sim \n 2 - não")

     while (chosenOption == "1"){
      warpCount += 1
      chosenOption = prompt("Deseja realizar a proxima dobra? \n1 - sim \n 2 - não")
        
     }
     alert(`Nave: ${spaceship},\n Quabtidade de dobras ${warpCount}`)
     


