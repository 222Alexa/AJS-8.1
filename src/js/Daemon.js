import Character from "./Character";
import Team from "./Team";

export default class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.deffence = 40;
  }
}
