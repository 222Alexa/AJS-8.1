import Character from "./Character";
import Team from "./Team";

export default class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.deffence = 10;
  }
}
