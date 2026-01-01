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