import Character from "../Character";
import Team from "../Team";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("добавление персонажа в команду", () => {
  const lusie = new Daemon("Lusie", "Daemon");
  const team = new Team();
  team.add(lusie);
  expect(team.members.has(lusie)).toBe(true);
});

test("невозможность повторного добавления персонажа", () => {
  const anton = new Magician("Anton", "Magician");
  const team = new Team();
  team.add(anton);
  expect(() => {
    team.add(anton);
  }).toThrow("Такой персонаж уже есть");
});

test("добавление нескольких персонажей в команду", () => {
  const valera = new Bowman("Valera", "Bowman");
  const greta = new Swordsman("Greta", "Swordsman");

  const team = new Team();
  team.addAll(valera, greta);
  expect(team.members.size).toBe(2);
});

test("addAll - отсутвие ошибки дублирования персонажей", () => {
  const valera = new Bowman("Valera", "Bowman");
  const greta = new Swordsman("Greta", "Swordsman");

  const team = new Team();
  team.addAll(valera, greta);
  expect(() => {
    team.addAll(valera, greta);
  });
  expect(team.members.size).toBe(2);
});

test("преобразование в массив", () => {
  const valera = new Undead("Valera", "Undead");
  const greta = new Zombie("Greta", "Zombie");

  const team = new Team();
  team.addAll(valera, greta);
  const received = team.toArray();
  const result = [
    {
      name: "Valera",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      deffence: 25,
    },
    {
      name: "Greta",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      deffence: 10,
    },
  ];
  expect(received).toEqual(result);
});
