import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static createdRangers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.createdRangers += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdRangers;
  }
}