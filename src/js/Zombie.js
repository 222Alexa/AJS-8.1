import Character from "./Character";
import Team from "./Team";

export default class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.deffence = 10;
  }
}
