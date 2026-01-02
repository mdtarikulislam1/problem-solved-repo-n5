const numbers = [2,4,6,5,2,4]

let firstDuplicate 
for(let i =0; i<numbers.length-1;   i++){
    console.log(numbers[i])
 for(let j = i+1; j<numbers.length; j++){
    console.log("j",numbers[j])
    if(numbers[i] === numbers[j]){
        firstDuplicate = numbers[i]
        break
    }
 }
} 

console.log(firstDuplicate)