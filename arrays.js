var chocolateBars = ["snickers", "hundred grand", "katkit", "skittles"]


function destructivelyaddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function AddElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}
