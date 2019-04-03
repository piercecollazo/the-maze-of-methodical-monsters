const monster = {
    isAlive: true,
    hitPoints: 30,
    lastDamageTaken: 0,
    respawn: function (){
        this.isAlive = true;
        this.hitPoints = 30;
        player.hitPoints += Math.ceil(Math.random() * 50);
    }
};

