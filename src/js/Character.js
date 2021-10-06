export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeHeroes = [
      "Bowman",
      "Daemon",
      "Magician",
      "Swordsman",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string") {
      throw new Error("Ошибка! Имя должно быть строкой!");
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error("Ошибка! количество символов в имени от 2 до 10!");
    }

    if (!typeHeroes.includes(type)) {
      throw new Error("Ошибка! Такой персонаж не существует!");
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.deffence *= 1.2;
    } else {
      throw new Error("Нельзя повысить уровень умершего!");
    }
    return 1;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.deffence / 100);
      // console.log('Не сегодня!');
    }
    if (this.health < 0) {
      this.health = 0;
      // console.log('Game over!');
    }
  }
}
