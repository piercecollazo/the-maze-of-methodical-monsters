const player = {
    isAlive: true,
    hitPoints: 100,
    level: 1,
    baseAttackDamage: 5,
    lastDamageTaken: 0,
    fight: function(monster){
       this.lastDamageTaken = Math.ceil(Math.random() * monster.baseAttackDamage);
       monster.lastDamageTaken = Math.ceil(Math.random() * this.baseAttackDamage);
       this.hitPoints = this.hitPoints - this.lastDamageTaken;
       monster.hitPoints = monster.hitPoints - monster.lastDamageTaken;

       if(monster.hitPoints < 1){
           monster.isAlive = false;
       } else if(this.hitPoints <= 0){
           player.isAlive = false;
       }
    },
    levelUp: function(){
        this.level += 1;
        this.baseAttackDamage += 5;
    },
    reset: function(){
        this.isAlive = true;
        this.hitPoints = 100;
        this.level = 1;
        this.baseAttackDamage = 5;
        this.lastDamageTaken = 0;
    },
}