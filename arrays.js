var chocolateBars = ["snickers", "hundred grand", "katkit", "skittles"]


function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

// function destructivelyAddElementToBeginningOfArray(array, element){
//   return array.unshift(element)
// }
// 
// function addElementToBeginningOfArray(array, element){
//   var newArray = [element, ...array]
//   return newArray
// }
// 
// 
// function destructivelyAddElementToEndOfArray(array, element){
//   return array.push(element)
// }
// 
// function addElementToEndOfArray(array, element){
//   var newArray = [...array, element]
//   return newArray
// }
