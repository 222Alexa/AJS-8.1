import Character from './character';
import Team from './team';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.deffence = 10;
  }
}
