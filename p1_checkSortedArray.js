// 🧠 Problem 2: Check Sorted Array
// Task:
// একটা number array দেওয়া থাকবে।
// Check করো array টা ascending order এ sorted কিনা।

const numbers = [1,2,3,4,5,6,7,6]
let result
for (let i = 0, j = 1; i<numbers.length -1; i++) {
   if(numbers[i] < numbers[i+1]){
    result = true
   }
   else{
    result = false
    break
   }
}

console.log(
result
)
