import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private enemies: Array<SimpleFighter>) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints >= 0
      && this.enemies.every((e) => e.lifePoints >= 0)) {
      this.enemies.forEach((e) => {
        e.receiveDamage(this.player.strength);
        e.attack(this.player);
      });
    }

    return super.fight();
  }
}