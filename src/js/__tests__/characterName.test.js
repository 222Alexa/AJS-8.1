import Character from "../Character";

test("Количество символов в имени менее 2", () => {
  expect(() => {
    const result = new Character("x", "Daemon");
    return result;
  }).toThrow();
});

test("Количество символов в имени более 10", () => {
  expect(() => {
    const result = new Character("xxxxxxxxxxx", "Daemon");
    return result;
  }).toThrow();
});

test("Имя не является строкой", () => {
  expect(() => {
    const result = new Character(11111, "Daemon");
    return result;
  }).toThrow();
});
