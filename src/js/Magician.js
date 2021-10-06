import Character from "./Character";
import Team from "./Team";

export default class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.deffence = 40;
  }
}
