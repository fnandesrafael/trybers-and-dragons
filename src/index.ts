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

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// Players vs Players
const pvp = new PVP(player1, player2);

// Players vs Entities
const pve = new PVE(player1, [monster1, monster2]);

// Battles
const runBattles = (battles: Array<Battle>): void => {
  battles.forEach((battle) => battle.fight());
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };