function count(string) {
  // TODO
  if (string) {
    const stringToarr = string.split("")
    const countDuplicate = stringToarr.reduce((map,item)=>{
        console.log("map",map)
        console.log("item",item)
         map[item] = (map[item] || 0) + 1
          return map
    },{})
    return countDuplicate
  } else {
    return {};
  }
}

console.log(count("aba"));
