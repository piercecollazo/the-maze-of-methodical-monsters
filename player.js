const player = {
    isAlive: true,
    hitPoints: 100,
    level: 1,
    lastDamageTaken: 0,
    fight: function(monster){
       this.lastDamageTaken = Math.ceil(Math.random() * 5);
       monster.lastDamageTaken = Math.ceil(Math.random() * 5);
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
    },
}