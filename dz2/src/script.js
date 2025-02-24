// Функция для создания массива объектов
function createOriginalArray() {
    return [
      { name: "Иван", age: 25 },
      { name: "Мария", age: 30 },
      { name: "Петр", age: 20 },
      { name: "Анна", age: 22 },
      { name: "Иван", age: 20 }
    ];
  }
  
  // Функция для клонирования массива
  function cloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  
  // Функция для сортировки массива по имени, а затем по возрасту
  function sortArray(arr) {
    return arr.sort((a, b) => {
      if (a.name === b.name) {
        return a.age - b.age;
      }
      return a.name.localeCompare(b.name);
    });
  }
  
  // Функция для преобразования массива в строку
  function arrayToString(arr) {
    return arr.map(obj => `{ name: "${obj.name}", age: ${obj.age} }`).join(", ");
  }
  
  // Экспортируем функции для тестирования
  module.exports = { createOriginalArray, cloneArray, sortArray, arrayToString };