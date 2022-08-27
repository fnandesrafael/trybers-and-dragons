import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static createdNecromancers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.createdNecromancers += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdNecromancers;
  }
}