# Solved Another Problem in js

## List
- Check Sorted Array
- Count sheeps
- First n Multiple x
- Row Sum Odd Numbers

# Code

### 1. Check Sorted Array
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
### 2. Count sheep true or false

```javascript
function countSheeps(sheep) {
    let result = 0
   for(let i = 0; i<sheep.length; i++){
    if(sheep[i] === true){
        result++
    }
   }
   return result
}

const value = [true,false,true,true,false,true]

console.log(countSheeps(value))
```
### 3. First n Multiple x

```javascript
function countBy(x, n) {
  let z = [];
for(let i = 1; i <= n; i++ ){
    z.push(x * i)
}
  return z;
}

console.log(countBy(1,10))
```
### 4. Row Sum Odd Numbers

```javascript
function rowSumOddNumbers(n) {
	return n*n*n
}

console.log(rowSumOddNumbers(2))
```
### 5. Find First Duplicate Value
```javascript
