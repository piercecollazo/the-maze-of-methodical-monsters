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
    },
    reset: function(){
        this.isAlive = true;
        this.hitPoints = 30;
        this.baseHP = 30;
        this.baseAttackDamage = 5;
        this.lastDamageTaken = 0;
        this.defeated = 0;
    },
    defeated: 0,
};

