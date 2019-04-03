const monster = {
    isAlive: true,
    baseHP: 30,
    hitPoints: 30,
    baseAttackDamage: 5,
    lastDamageTaken: 0,
    respawn: function (){
        this.isAlive = true;
        this.baseHP += 5;
        this.hitPoints = this.baseHP;
        this.baseAttackDamage += 2;
        player.hitPoints += Math.ceil(Math.random() * 50);
    }
};

