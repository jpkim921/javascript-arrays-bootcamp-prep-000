var chocolateBars = ["snickers", "hundred grand", "katkit", "skittles"]


function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToEndOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}