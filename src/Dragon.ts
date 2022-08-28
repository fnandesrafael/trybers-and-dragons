import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifepoints = 999;
  }
}