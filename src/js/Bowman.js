import Character from "./Character";
import Team from "./Team";

export default class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 40;
    this.deffence = 10;
  }
}
