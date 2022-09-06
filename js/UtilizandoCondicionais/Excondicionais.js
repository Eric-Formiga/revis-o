var nome = prompt("Qual seu nome,piloto?")
var velNave = 0
var velNave = prompt("A qual velocidade você quer acelerar a nave?")
var conf = confirm(`deseja acelerar a nave a ${velNave}km/s`)


if(conf == true && velNave >= 900){
    alert(`ok Piloto ${nome}, a nave irá acelerar a ${velNave} km/s, boa viagem!! `)
}else{
    alert("voo cancelado, verifique a velocidade da nave (a velocidade da nave de ser maior q 900km/s),ericrecarregue a pagina e tente novamente!!")
}