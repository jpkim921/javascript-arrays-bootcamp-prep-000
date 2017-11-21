var chocolateBars = ["snickers", "hundred grand", "katkit", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
