// Функцию, которая по числу определяет, является ли оно простым
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

// Функция, выводящая простые числа в заданном диапазоне
function printPrimes(max) {
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) console.log(i);
  }
}

printPrimes(7920);
