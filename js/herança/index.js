class Spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!! \n Diminua ou poderá provocar danos a nave")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de decoberta")
    }
}

let Darwin = new DiscoverySpaceship("Darwin", 10, 300)
let fenix = new BattleSpaceship("Fenix",20, 400)

Darwin.speedUp(400)
fenix.speedUp(500)

Darwin.stop()
fenix.stop()


