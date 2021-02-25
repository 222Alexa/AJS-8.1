import Character from '../js/character';
import Team from '../js/team';
import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('добавление персонажа в команду', () => {
  const lusie = new Daemon('Lusie', 'Daemon');
  const team = new Team();
  team.add(lusie);
  expect(team.members.has(lusie)).toBe(true);
});

test('невозможность повторного добавления персонажа', () => {
  const anton = new Magician('Anton', 'Magician');
  const team = new Team();
  team.add(anton);
  expect(() => {
    team.add(anton);
  }).toThrow('Такой персонаж уже есть');
});

test('добавление нескольких персонажей в команду', () => {
  const valera = new Bowman('Valera', 'Bowman');
  const greta = new Swordsman('Greta', 'Swordsman');

  const team = new Team();
  team.addAll(valera, greta);
  expect(team.members.size).toBe(2);
});

test('addAll - отсутвие ошибки дублирования персонажей', () => {
  const valera = new Bowman('Valera', 'Bowman');
  const greta = new Swordsman('Greta', 'Swordsman');

  const team = new Team();
  team.addAll(valera, greta);
  expect(() => {
    team.addAll(valera, greta);
  });
  expect(team.members.size).toBe(2);
});

test('преобразование в массив', () => {
  const valera = new Undead('Valera', 'Undead');
  const greta = new Zombie('Greta', 'Zombie');

  const team = new Team();
  team.addAll(valera, greta);
  const received = team.toArray();
  const result = [{
    name: 'Valera',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,

  }, {
    name: 'Greta',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,

  },

  ];
  expect(received).toEqual(result);
});
