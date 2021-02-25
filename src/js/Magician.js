import Character from './character';
import Team from './team';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.deffence = 40;
  }
}
