# Solved Another Problem in js

## List
1. Check Sorted Array
2. Check Sorted Array

# Code

### Check Sorted Array
```javascript
const numbers = [1,2,3,4,5,6,7,6]
let result
for (let i = 0, j = 1; i<numbers.length -1; i++) {
    console.log(numbers[i])
    console.log(numbers[i+1])
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
```
###