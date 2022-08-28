import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Characters
const player1 = new Character('Finduil');
const player2 = new Character('Thandae');
const player3 = new Character('Felafin');

player1.levelUp();
player1.levelUp();

export { player1, player2, player3 };

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

export { monster1, monster2 };

// Players vs Players
const pvp = new PVP(player2, player3);

export { pvp };

// Players vs Entities
const pve = new PVE(player1, [monster1, monster2]);

export { pve };

// Battles
const runBattles = (battles: Array<Battle>): void => {
  battles.forEach((battle) => battle.fight());
};

export { runBattles };