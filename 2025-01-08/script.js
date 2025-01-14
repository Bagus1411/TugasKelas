// Data Monster
const monsters = [
    {
        name: "Bloated",
        health: 70,
        attack: 12,
        defense: 3,
        image: "images/bloated.jpeg",
        reward: { gold: 50, xp: 40 },
    },
    {
        name: "Tree Sentinel",
        health: 120,
        attack: 15,
        defense: 15,
        image: "images/sentinel.jpeg",
        reward: { gold: 80, xp: 100 },
    },
    {
        name: "Wolf Of Surya",
        health: 40,
        attack: 40,
        defense: 0.5,
        image: "images/wolf.png",
        reward: { gold: 120, xp: 35 },
    },
    {
        name: "Mohg",
        health: 150,
        attack: 20,
        defense: 20,
        image: "images/mohg.jpg",
        reward: { gold: 220, xp: 145 },
    },
    {
        name: "Malenia",
        health: 70,
        attack: 100,
        defense: 2,
        image: "images/malenia.jpg",
        reward: { gold: 250, xp: 170 },
    },
    {
        name: "Gauwill The Traitor",
        health: 100,
        attack: 8,
        defense: 7,
        image: "images/Gauwill.jpeg",
        reward: { gold: 70, xp: 50 },
    },
    {
        name: "Ghost",
        health: 60,
        attack: 20,
        defense: 2,
        image: "images/ghost.png",
        reward: { gold: 60, xp: 35 },
    },
    {
        name: "Zombie",
        health: 90,
        attack: 10,
        defense: 8,
        image: "images/zombie.png",
        reward: { gold: 80, xp: 50 },
    },
    {
        name: "Audreyn",
        health: 50,
        attack: 2,
        defense: 2,
        image: "images/Audreyn.jpeg",
        reward: { gold: 50, xp: 10 },
    },
    {
        name: "Hely The Hero",
        health: 300,
        attack: 13,
        defense: 8,
        image: "images/Hely.jpeg",
        reward: { gold: 250, xp: 150 },
    },
    {
        name: "Sword of Luck",
        health: 10,
        attack: 0,
        defense: 0,
        image: "images/sword.jpeg",
        reward: { gold: 300, xp: 1 },
    },
    {
        name: "Giles",
        health: 100,
        attack: 13,
        defense: 5,
        image: "images/Giles.jpeg",
        reward: { gold: 90, xp: 60 },
    },
    {
        name: "Sane",
        health: 85,
        attack: 13,
        defense: 3,
        image: "images/Sane.jpeg",
        reward: { gold: 76, xp: 50 },
    },
];

// Data Boss
const bosses = [
    {
        name: "BayleTheDread",
        health: 220,
        attack: 20,
        defense: 30,
        image: "images/BayleTheDread.jpeg",
        reward: { gold: 300, xp: 300 },
        dayToAppear: 6, // Muncul di hari ke-6
    },
    {
        name: "Placidusax",
        health: 550, // Health ditingkatkan
        attack: 30, // Attack ditingkatkan
        defense: 50, // Defense ditingkatkan
        image: "images/Placidusax.png",
        reward: { gold: 500, xp: 500 }, // Reward ditingkatkan
        dayToAppear: 12, // Muncul di hari ke-12
    },
    // ... Tambahkan boss lain jika perlu
];

// Data Pemain
let player = {
    health: 100,
    energy: 100,
    level: 1,
    xp: 0,
    xpThreshold: 100,
    skillPoints: 0,
    day: 1,
    gold: 100,
    inventory: [], // Tetap ada, mungkin nanti dibutuhkan
    skills: ["Power Strike", "Angel Blow"],
    strength: 8,
    agility: 5,
    stamina: 7,
    defense: 10,
    mana: 50, // <-- Tambahkan mana
    maxMana: 50, // <-- Tambahkan maxMana
    powerStrike: {
        level: 1,
        damageMultiplier: 1.7, // 200% damage
        manaCost: 15, // <-- Biaya mana untuk Power Strike
        upgradeCost: 80, // Gold cost to upgrade
    },
    angelBlow: { // <-- Tambahkan data untuk Angel Blow
        level: 1,
        damageMultiplier: 1.35, // 150% damage
        manaCost: 40,
        upgradeCost: 250, // Sesuaikan dengan yang Anda inginkan
        percentageDamage: 0.3, // 50% damage
    },
};

// Variabel untuk Combat
let currentMonster = null;
let monsterHealth = 0;
let inCombat = false;
let combatTurns = 0;

// --- FUNGSI-FUNGSI UNTUK COMBAT ---
function startCombat() {
    inCombat = true;
    combatTurns = 0;

    // Cek apakah boss muncul
    const currentDay = player.day;
    const availableBosses = bosses.filter(
        (boss) => boss.dayToAppear === currentDay
    );

    if (availableBosses.length > 0) {
        // Munculkan boss yang sesuai dengan hari ini
        currentMonster = JSON.parse(JSON.stringify(availableBosses[0]));
        showMessage(`Boss ${currentMonster.name} appeared!`);
    } else {
        // Munculkan monster biasa
        currentMonster = JSON.parse(
            JSON.stringify(monsters[Math.floor(Math.random() * monsters.length)])
        );
        showMessage(`A ${currentMonster.name} appeared!`);
    }

    monsterHealth = currentMonster.health;
    document.getElementById("combat-area").style.display = "block";
    document.getElementById("combat-character-image").src = "images/mc.png";
    document.getElementById("combat-monster-image").src = currentMonster.image;
    document.getElementById("monster-health").innerText = monsterHealth;
}

function endCombat(isVictory) {
    inCombat = false;
    document.getElementById("combat-area").style.display = "none";
    if (isVictory) {
        showMessage("You defeated the monster!");
        player.xp += currentMonster.reward.xp;
        player.gold += currentMonster.reward.gold;
        checkLevelUp();
    } else {
        if (player.health <= 0) {
            player.health = 0; // Set health ke 0 agar tidak negatif
            showMessage("Game Over! You were defeated.");
            disableButtons();
        }
    }
    updatePlayerStats();
    currentMonster = null; // Reset currentMonster setelah combat selesai
}

function updateCombatStats() {
    document.getElementById("monster-health").innerText = monsterHealth;
    if (monsterHealth <= 0) {
        endCombat(true);
    }
}

function attack() {
    if (inCombat) {
        combatTurns++;

        // Serangan Pemain
        const playerDamage =
            Math.floor(
                Math.random() * (player.strength - currentMonster.defense - 3)
            ) + player.strength + player.agility - 3 // Damage minimal = defense monster
        monsterHealth -= playerDamage;
        showMessage(`You dealt ${playerDamage} damage to ${currentMonster.name}.`);

        // Serangan Monster (jika monster masih hidup)
        if (monsterHealth > 0) {
            const monsterDamage =
                Math.floor(
                    Math.random() * (currentMonster.attack - player.defense - player.stamina + 3)
                ) + currentMonster.defense + 3 // Damage minimal = defense player
            player.health -= monsterDamage;
            showMessage(
                `${currentMonster.name} dealt ${monsterDamage} damage to you.`
            );

            // Cek apakah pemain kalah
            if (player.health <= 0) {
                endCombat(false);
            }
        }

        // Update tampilan stats
        updateCombatStats();
        updatePlayerStats();

        // Cek apakah monster kalah
        if (monsterHealth <= 0) {
            endCombat(true);
        }
    }
}

// Fungsi untuk menggunakan skill Power Strike
function usePowerStrike() {
    if (inCombat) {
        if (player.mana >= player.powerStrike.manaCost) {
            // Cukup mana untuk Power Strike
            player.mana -= player.powerStrike.manaCost; // Kurangi mana di sini
            combatTurns++;

            // Power Strike: damage = strength * damageMultiplier + 5
            const playerDamage =
                Math.floor(player.strength * player.powerStrike.damageMultiplier) + 3;
            monsterHealth -= playerDamage;
            showMessage(
                `You used Power Strike! Dealt ${playerDamage} damage to ${currentMonster.name}.`
            );

            // Serangan Monster (jika monster masih hidup)
            if (monsterHealth > 0) {
                const monsterDamage =
                    Math.floor(
                        Math.random() * (currentMonster.attack - player.defense + 1)
                    ) + player.defense;
                player.health -= monsterDamage;
                showMessage(
                    `${currentMonster.name} dealt ${monsterDamage} damage to you.`
                );

                // Cek apakah pemain kalah
                if (player.health <= 0) {
                    endCombat(false);
                }
            }

            // Update tampilan stats
            updateCombatStats();
            updatePlayerStats();

            // Cek apakah monster kalah
            if (monsterHealth <= 0) {
                endCombat(true);
            }
        } else {
            showMessage("Not enough mana for Power Strike!");
        }
    }
}

function useAngelBlow() {
    if (inCombat) {
        if (player.mana >= player.angelBlow.manaCost) {
            player.mana -= player.angelBlow.manaCost;
            combatTurns++;

            // Angel Blow: damage = strength * damageMultiplier + percentage damage * current monster health + 2
            const playerDamage =
                Math.floor(player.strength * player.angelBlow.damageMultiplier + currentMonster.health * player.angelBlow.percentageDamage) + 1;

            monsterHealth -= playerDamage;
            showMessage(
                `You used Angel Blow! Dealt ${playerDamage} damage to ${currentMonster.name}.`
            );

            // Serangan Monster (jika monster masih hidup)
            if (monsterHealth > 0) {
                const monsterDamage =
                    Math.floor(
                        Math.random() * (currentMonster.attack - player.defense + 1)
                    ) + player.defense;
                player.health -= monsterDamage;
                showMessage(
                    `${currentMonster.name} dealt ${monsterDamage} damage to you.`
                );

                // Cek apakah pemain kalah
                if (player.health <= 0) {
                    endCombat(false);
                }
            }

            // Update tampilan stats
            updateCombatStats();
            updatePlayerStats();

            // Cek apakah monster kalah
            if (monsterHealth <= 0) {
                endCombat(true);
            }
        } else {
            showMessage("Not enough mana for Angel Blow!");
        }
    }
}

// ... (Kode sebelumnya: Data Monster, Data Pemain, Variabel Combat, FUNGSI-FUNGSI UNTUK COMBAT) ...

// --- FUNGSI-FUNGSI LAINNYA ---

function checkLevelUp() {
    while (player.xp >= player.xpThreshold) {
        player.xp -= player.xpThreshold;
        player.level++;
        player.skillPoints++;
        player.xpThreshold = Math.floor(player.xpThreshold * 1.5);

        // Natural stat growth
        player.strength += 3;
        player.agility += 3;
        player.stamina += 2;
        player.defense += 6;
        player.maxMana += 5; // Tambahkan maxMana saat level up
        player.mana = player.maxMana; // Isi penuh mana saat level up
        showMessage("Level up! Stats increased. You gained 1 skill point!");
    }
    updatePlayerStats();
}

function updatePlayerStats() {
    document.getElementById("health").innerText = player.health;
    document.getElementById("energy").innerText = player.energy;
    document.getElementById("level").innerText = player.level;
    document.getElementById("xp").innerText = player.xp;
    document.getElementById("xp-threshold").innerText = player.xpThreshold;
    document.getElementById("day").innerText = player.day;
    document.getElementById("mana").innerText = player.mana;
    document.getElementById("max-mana").innerText = player.maxMana;
}


function showMessage(message) {
    const log = document.getElementById("game-message");
    log.innerHTML = message + "<br>" + log.innerHTML; // Menampilkan pesan baru di atas pesan lama
}

function disableButtons() {
    document.querySelectorAll("button").forEach((button) => (button.disabled = true));
}

function updateCharacterStats() {
    const statsList = document.getElementById("char-stats-list");
    statsList.innerHTML = `
      <p>Health: ${player.health}</p>
      <p>Energy: ${player.energy}</p>
      <p>Level: ${player.level}</p>
      <p>XP: ${player.xp} / ${player.xpThreshold}</p>
      <p>Strength: ${player.strength}</p>
      <p>Agility: ${player.agility}</p>
      <p>Stamina: ${player.stamina}</p>
      <p>Defense: ${player.defense}</p>
      <p>Gold: ${player.gold}</p>
      <p>Skills: ${player.skills.length > 0
            ? player.skills
                .map((skill) => {
                    if (skill === "Power Strike") {
                        return `${skill} (Lv. ${player.powerStrike.level})`;
                    }
                    if (skill === "Angel Blow") {
                        return `${skill} (Lv. ${player.angelBlow.level})`;
                    }
                    return skill;
                })
                .join(", ")
            : "None"
        }</p>
    `;
}

// Fungsi untuk upgrade skill Power Strike
function upgradePowerStrike() {
    if (player.gold >= player.powerStrike.upgradeCost) {
        player.gold -= player.powerStrike.upgradeCost;
        player.powerStrike.level++;
        player.powerStrike.damageMultiplier += 0.3; // Meningkatkan damage multiplier sebesar 20%
        player.powerStrike.upgradeCost = Math.floor(
            player.powerStrike.upgradeCost * 1.6
        ); // Biaya upgrade meningkat 50%

        updatePlayerStats();
        updateCharacterStats();

        showMessage(
            `Power Strike upgraded to level ${player.powerStrike.level}! Damage increased!`
        );
    } else {
        showMessage("Not enough gold to upgrade Power Strike!");
    }
}

function upgradeAngelBlow() {
    if (player.gold >= player.angelBlow.upgradeCost) {
        player.gold -= player.angelBlow.upgradeCost;
        player.angelBlow.level++;
        player.angelBlow.damageMultiplier += 0.1; // Meningkatkan damage multiplier sebesar 10%
        player.angelBlow.percentageDamage += 0.03;
        player.angelBlow.upgradeCost = Math.floor(
            player.angelBlow.upgradeCost * 2
        ); // Biaya upgrade meningkat 50%

        updatePlayerStats();
        updateCharacterStats();

        showMessage(
            `Angel Blow upgraded to level ${player.angelBlow.level}! Damage increased!`
        );
    } else {
        showMessage("Not enough gold to upgrade Angel Blow!");
    }
}

// --- EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
    // Adventure
    document.getElementById("adventure").addEventListener("click", () => {
        if (player.energy > 0) {
            player.energy -= 10;
            const encounterChance = Math.random();
            if (encounterChance > 0.3 || player.day == 6 || player.day == 12) {
                // 70% chance to encounter a monster
                // Modifikasi di sini
                startCombat();
            } else {
                // 30% chance to find gold (between 1 and 20 gold)
                const goldFound = Math.floor(Math.random() * 20) + 1;
                player.gold += goldFound;
                showMessage(`You found ${goldFound} gold on your adventure!`);
            }
            // Update player stats after energy is used or gold is found
            updatePlayerStats();
        } else {
            showMessage("Not enough energy to adventure!");
        }
    });

    // Rest
    document.getElementById("rest").addEventListener("click", () => {
        if (!inCombat) {
            player.health = Math.min(100, player.health + 100);
            player.energy = Math.min(100, player.energy + 20);
            player.mana = Math.min(player.maxMana, player.mana + 25);
            player.day++; // <--- Tambahkan 1 ke player.day setiap kali rest
            showMessage("You rested and recovered health, energy, and mana.");
            updatePlayerStats();
        } else {
            showMessage("You can't rest while in combat!");
        }
    });

    // Show Character Stats
    document
        .getElementById("character-stats-button")
        .addEventListener("click", () => {
            const charStats = document.getElementById("character-stats");
            if (charStats.style.display === "none") {
                charStats.style.display = "block";
                updateCharacterStats();
            } else {
                charStats.style.display = "none";
            }
        });

    document.getElementById("close-stats-button").addEventListener("click", () => {
        document.getElementById("character-stats").style.display = "none";
    });

    // Upgrade Skill
    document.getElementById("upgrade-skill-button").addEventListener("click", () => {
        const upgradeMenu = document.getElementById("upgrade-menu");
        if (upgradeMenu.style.display === "none") {
            upgradeMenu.style.display = "block";
            // Update upgrade cost display
            document.getElementById("power-strike-cost").innerText = player.powerStrike.upgradeCost;
            document.getElementById("angel-blow-cost").innerText = player.angelBlow.upgradeCost;
        } else {
            upgradeMenu.style.display = "none";
        }
    });

    document.getElementById("close-upgrade-menu").addEventListener("click", () => {
        document.getElementById("upgrade-menu").style.display = "none";
    });

    document.getElementById("upgrade-power-strike").addEventListener("click", () => {
        upgradePowerStrike();
    });

    document.getElementById("upgrade-angel-blow").addEventListener("click", () => {
        upgradeAngelBlow();
    });

    // Combat: Attack
    document.getElementById("attack").addEventListener("click", () => {
        if (inCombat) {
            attack();
            updatePlayerStats();
        }
    });

    // Combat: Power Strike
    document.getElementById("power-strike").addEventListener("click", () => {
        if (inCombat) {
            usePowerStrike();
            updatePlayerStats();
        }
    });

    // Combat: Angel Blow
    document.getElementById("angel-blow").addEventListener("click", () => {
        if (inCombat) {
            useAngelBlow();
        }
    });


    // Combat: Run
    document.getElementById("run").addEventListener("click", () => {
        if (inCombat) {
            // 50% chance to escape
            if (Math.random() < 0.5) {
                endCombat(false);
                showMessage("You successfully ran away.");
            } else {
                showMessage("You failed to escape!");
                // Monster attacks when escape fails
                const monsterDamage =
                    Math.floor(
                        Math.random() * (currentMonster.attack - player.defense + 1)
                    ) + player.defense;
                player.health -= monsterDamage;
                showMessage(
                    `${currentMonster.name} dealt ${monsterDamage} damage to you.`
                );
                // Update player stats after the attack
                updatePlayerStats();
                // Check if the player is defeated after the attack
                if (player.health <= 0) {
                    endCombat(false);
                }
            }
        }
    });

    startGame();
});

// Fungsi untuk memulai game
function startGame() {
    updatePlayerStats();
}