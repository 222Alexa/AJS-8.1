export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // добавляет персонаж
    if (this.members.has(character)) {
      throw new Error("Такой персонаж уже есть");
    }
    this.members.add(character);
  }

  addAll(...characters) {
    // добавляет произвольное количество персонажей
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    // конвертирует Set в массив
    return Array.from(this.members);
  }
}
