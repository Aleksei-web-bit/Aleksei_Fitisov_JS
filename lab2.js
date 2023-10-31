// Функция, которая по числу определяет, является ли оно простым.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

// Использование функции isPrime для определения количества простых чисел в отрезке целых чисел от 0 до 7920.
function countPrimes(max) {
let count = 0;
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

console.log(countPrimes(7920));

// Вывод простых чисел на отрезке от 0 до x, где x заранее заданное число, которое мы ввели в программу.
function printPrimes(x) {
  for (let i = 2; i <= x; i++) {
    if (isPrime(i)) console.log(i);
  }
}

// printPrimes(25);
