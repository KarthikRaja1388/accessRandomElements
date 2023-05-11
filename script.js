const numbers = [1, 2, 3, 4, 5, 6];

let result = function spreadArray(inputArray) {
  const [first, second, ...restOfElements] = inputArray;
  return [first, second, restOfElements.pop(-1)];
};

console.log(result(numbers));
