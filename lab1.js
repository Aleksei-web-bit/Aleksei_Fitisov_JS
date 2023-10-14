const [n1, n2, n3, n4, n5, n6] = [2, 3, 18, 4, -5, -8];

let maneDeterminant = n1 * n5 - n2 * n4;
console.log('maneDeterminant = ' + maneDeterminant + ';');

let firstDeterminant = n3 * n5 - n2 * n6;
console.log('firstDeterminant = ' + firstDeterminant + ';');

let secondDeterminant = n1 * n6 - n3 * n4;
console.log('secondDeterminant = ' + secondDeterminant + ';');

let x = firstDeterminant / maneDeterminant;
let y = secondDeterminant / maneDeterminant;
console.log('x = ' + x + ', y = ' + y + '.');