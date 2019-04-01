const player = {
    hitPoints: 100,
    maxAttack: 5,
    armor: 1,
    level: 1,

    attack: function(enemy) {
        this.hitPoints -= this.calculateAttackDamage(enemy.maxAttack);
        enemy.hitPoints -= this.calculateAttackDamage(this.maxAttack);
    },

    calculateAttackDamage: function(maxAttack) {
        const randomAttack = randomizeAttack(maxAttack);
        const damageTaken = randomAttack - this.armor;
        return Math.max(damageTaken, 1);
    },

    randomizeAttack: function(attackMax) {
        return Math.floor(Math.random() * attackMax);
    },

    levelUp: function() {
        this.attackDamage = Math.floor(this.attackDamage * 1.2);
        this.level = this.level + 1;
        this.armor = this.armor + 1;
    },
};