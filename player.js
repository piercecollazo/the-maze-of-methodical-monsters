const player = {
    hitPoints: 100,
    baseAttackDamage: 5,
    damageTaken: 0,
    armor: 1,
    level: 1,
    isAlive: true,

    fight: function(enemy) {
        const rawDamageTaken = enemy.calculateAttackDamage();
        this.damageTaken = Math.max(rawDamageTaken - this.level, 1);
        this.hitPoints -= this.damageTaken;
        if (this.hitPoints <= 0) {
            this.isAlive = false;
        }

        const rawAttackDamage = this.calculateAttackDamage();

        enemy.takeDamage(rawAttackDamage);
    },

    calculateAttackDamage: function() {
        return Math.floor(Math.random() * this.baseAttackDamage);
    },

    levelUp: function() {
        this.baseAttackDamage = Math.floor(this.baseAttackDamage * 1.2);
        this.level++;
        this.hitPoints += 5;
    },
};