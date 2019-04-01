window.onload = init;


function init() {
    document.querySelector('#fight').addEventListener(`click`, attackRound);
}

function attackRound(event) {
    event.preventDefault();
    
    
    if (!monster.isAlive) {
        monster.respawn();
        player.levelUp();
        updateLevel();
    }
    
    if (!player.isAlive) {
        gameOver();
    } else {
        player.fight(monster)
    }
    
    
    updateHtml();
}

function updateHtml() {
    updateDamage();
    updateHealthBars();
    updateResult();
}

function updateDamage() {
    monsterDamageText = monster.damageTaken > player.damageTaken
        ? `You clobbered the monster with `
        : `You barely scratched the monster with `;
    monsterDamageText += monster.damageTaken;
    
    playerDamageText = player.damageTaken > monster.damageTaken
        ? `The monster clobbered you with `
        : `The monster barely scratched you with `;
    playerDamageText += player.damageTaken;
    document.querySelector('#player-damage-taken').innerText = playerDamageText;
    document.querySelector('#monster-damage-taken').innerText = monsterDamageText;
}


function updateHealthBars() {
    const playerHealth = document.querySelector('#player-health');
    const monsterHealth = document.querySelector('#monster-health');
    playerHealth.innerText = `${player.hitPoints}`
    playerHealth.style.width = `${player.hitPoints * 2}px`;
    monsterHealth.innerText = `${monster.hitPoints}`
    monsterHealth.style.width = `${monster.hitPoints * 2}px`;
}

function updateResult() {
    let result = '';
    if (!player.isAlive) {
        result = 'You died. Game over.';
    } else if (!monster.isAlive) {
        result = `You slayed the monster! Here comes another...`; 
    }
    
    document.querySelector('#results').innerText = result;
}

function updateLevel() {
    document.querySelector('#level-number').innerText = player.level;
}

function gameOver() {
    document.querySelector('#results').innerText = `You lost. Game over.`;    
}