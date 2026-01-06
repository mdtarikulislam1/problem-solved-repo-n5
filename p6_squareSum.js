

function squareSum(numbers){
   let emtyArr = []
   for(let i = 0; i<numbers.length; i++){
      emtyArr.push(numbers[i] * numbers[i])
   }
   return emtyArr.reduce((map,item)=> map+item,0)
}


const arr = [1,2,2]
console.log(squareSum(arr))