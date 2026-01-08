const numbers = [7, 4, 6, 5, 2, 4, 5];

let firstDuplicate;
outerLoop:
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      firstDuplicate = numbers[i];
      break outerLoop;
    }
  }
}

console.log("first duplicate", firstDuplicate); // 2
