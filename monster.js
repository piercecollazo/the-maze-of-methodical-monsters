// const monster = {
//     hitPoints: 30,
//     baseAttackDamage: 5,
//     lastDamageTaken: 0,
//     level: 1,
//     isAlive: true,

//     respawn: function() {
//         this.hitPoints = 30;
//         this.isAlive = true;
//     },

//     calculateAttackDamage: function() {
//         return Math.floor(Math.random() * this.baseAttackDamage) + 2;
//     },

//     takeDamage: function(rawDamage) {
//         this.lastDamageTaken = Math.max(1, rawDamage - this.level);
//         this.hitPoints -= this.lastDamageTaken;
//         if (this.hitPoints <= 0) {
//             this.isAlive = false;
//         }
//     }
// };

// const boss = {
//     hit
// }

const monster = {
    hitPoints: 30,
    lastDamageTaken: 0,
    isAlive: true,
};