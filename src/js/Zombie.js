import Character from './character';
import Team from './team';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.deffence = 10;
  }
}
