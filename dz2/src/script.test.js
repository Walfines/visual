const { createOriginalArray, cloneArray, sortArray, arrayToString } = require('./script');

test('createOriginalArray возвращает правильный массив', () => {
  const expected = [
    { name: "Иван", age: 25 },
    { name: "Мария", age: 30 },
    { name: "Петр", age: 20 },
    { name: "Анна", age: 22 },
    { name: "Иван", age: 20 }
  ];
  expect(createOriginalArray()).toEqual(expected);
});

test('cloneArray правильно клонирует массив', () => {
  const original = createOriginalArray();
  const cloned = cloneArray(original);

  // Проверяем, что массивы равны
  expect(cloned).toEqual(original);

  // Проверяем, что это разные объекты (глубокое копирование)
  expect(cloned).not.toBe(original);
});

test('sortArray сортирует массив по имени, а затем по возрасту', () => {
  const original = createOriginalArray();
  const sorted = sortArray(cloneArray(original));

  const expected = [
    { name: "Анна", age: 22 },
    { name: "Иван", age: 20 },
    { name: "Иван", age: 25 },
    { name: "Мария", age: 30 },
    { name: "Петр", age: 20 }
  ];
  expect(sorted).toEqual(expected);
});

test('arrayToString преобразует массив в строку', () => {
  const arr = [
    { name: "Иван", age: 25 },
    { name: "Мария", age: 30 }
  ];
  const result = arrayToString(arr);
  expect(result).toBe('{ name: "Иван", age: 25 }, { name: "Мария", age: 30 }');
});