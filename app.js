let array1 = [1,2,3,4,5],
  array2 = [1,3,7,8,9,8];

let uniqueItems = array1.filter( (item) => array2.indexOf(item) == -1);
let mergedArr = array2.concat(uniqueItems).sort();
console.log(mergedArr);