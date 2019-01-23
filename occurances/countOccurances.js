function countOccurances(arrOfInt, int) {
  if (!(Array.isArray(arrOfInt))) return new Error('The first parameter is not an Array.');
  if (!(Number.isInteger(int))) return new Error('The second parameter is not an Integer.');

  let occurances = 0;

  arrOfInt.forEach((item) => {
    if (item === int) occurances++;
  });

  return occurances;
}

const result = countOccurances([2, 3, 6, 6, 3, 3, 1], 3);
const arrError = countOccurances('Wrong parameter', 3);
const intError = countOccurances([2, 3, 6, 6, 3, 3, 1], 'Wrong parameter');

console.log(`Result: ${result}`);
console.log(`Array Error: ${arrError}`);
console.log(`Int Error: ${intError}`);
