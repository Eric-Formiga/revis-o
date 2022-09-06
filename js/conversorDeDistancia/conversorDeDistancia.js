let dist = prompt("qual a distancia em anos luz?")
let option = prompt("pra qual da opções você deseja converter \n1- parsec(pc) \n2 - unidade astronômica(au) \n3 - quilômetros(km) ")

let parsec = dist * 0.306601
let unitAstro = dist * 63241.1
let distKM = dist * (9.5 * Math.pow(10,12))

switch(option){
    case "1":
        alert(`a distancia em anos luz ${dist} convertida em parsec é ${parsec} pc` )
break
case "2":
    alert(`a distancia em anos luz ${dist} convertida em unidade astronômica é ${unitAstro} au` )
break
case "3":
    alert(`a distancia em anos luz ${dist} convertida em quilometros é ${distKM} km ` )
break
default:1
    alert("Oop! Houve algum erro! Você deve escolher as opções 1, 2 ou 3")
}
