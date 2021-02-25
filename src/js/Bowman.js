import Character from './character';
import Team from './team';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 40;
    this.deffence = 10;
  }
}
