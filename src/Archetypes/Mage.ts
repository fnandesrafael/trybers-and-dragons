import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static createdMages = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createdMages += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.createdMages;
  }
}