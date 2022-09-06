let spaceShip = prompt("Digite o nome da nave!")
let sub = prompt("qual caracter você deseja substituir?")
let newSub = prompt("por qual caracter você desja substituir")
let newName = ""


for(let i = 0; i < spaceShip.length;i++){
   if(spaceShip[i] == sub){
    newName += newSub
   }else{
    newName += spaceShip[i]
   }
}
alert(`O nome Antigo da nave era ${spaceShip} e o novo nome da nave é ${newName}`)