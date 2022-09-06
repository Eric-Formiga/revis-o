let spaceShip = prompt("Digite o nome da nave!")
let invertedName = ""

 
for(let i = spaceShip.length -1 ; i >= 0; i--){
if(spaceShip[i] == "e"){
    break
}
    invertedName += spaceShip[i]
}
alert(`O nome original da nave era ${spaceShip} e o nove apos ocultação ${invertedName}`)