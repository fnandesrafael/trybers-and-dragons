import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static createdWarriors = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.createdWarriors += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.createdWarriors;
  }
}