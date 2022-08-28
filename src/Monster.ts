import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifepoints: number;
  private _strength: number;
  
  constructor() {
    this._lifepoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifepoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifepoints -= attackPoints;
    } if (this._lifepoints < 0) {
      this._lifepoints = -1;
    } return this._lifepoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}