const boss = {
    isAlive: true,
    baseHP: 200,
    hitPoints: 200,
    baseAttackDamage: 20,
    lastDamageTaken: 0,
    respawn: function (){
        this.isAlive = true;
        this.baseHP += 50;
        this.hitPoints = this.baseHP;
        this.baseAttackDamage += 5;
        player.hitPoints += Math.ceil(Math.random() * 100);
        player.level += 5;
        player.baseAttackDamage += 10;
    },
    reset: function(){
        this.isAlive = true;
        this.hitPoints = 100;
        this.baseHP = 100;
        this.baseAttackDamage = 20;
        this.lastDamageTaken = 0;
    },
}