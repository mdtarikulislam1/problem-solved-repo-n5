const numbers = [2,4,6,5,2,4,5]

let firstDuplicate 
for(let i =0; i<numbers.length;   i++){
    console.log(numbers[i])
 for(let j = i+1; j<numbers.length+1; j++){
    console.log("j",numbers[j])

    if(numbers[i] === numbers[j]){
        firstDuplicate = numbers[i]
        break
    }
 }
} 

console.log("first duplicate",firstDuplicate)