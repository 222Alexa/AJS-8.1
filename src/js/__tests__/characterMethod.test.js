import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Zombie from "../Zombie";

test("Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, deffence", () => {
  const recieved = new Magician("Valera", "Magician");
  recieved.levelUp();
  expect(recieved).toEqual({
    name: "Valera",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test("Метод levelUp выбрасывает ошибку, если health = 0", () => {
  const recieved = new Zombie("Lusie", "Zombie");
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow("Нельзя повысить уровень умершего!");
});

test("Метод damage(points) меняет внутреннее состояние объекта(нанесение урона)", () => {
  const recieved = new Bowman("Lusie", "Bowman");
  recieved.damage(1);
  const result = {
    name: "Lusie",
    type: "Bowman",
    health: 99.1,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  expect(recieved).toEqual(result);
});

test("Метод damage(points) не должен изменять значения, если health = 0", () => {
  const recieved = new Swordsman("Stepan", "Swordsman");
  recieved.health = 0;
  const result = {
    name: "Stepan",
    type: "Swordsman",
    health: 0,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test("при health < 0 метод damage(points) должен уствновить health = 0", () => {
  const recieved = new Daemon("Valera", "Daemon");
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});
