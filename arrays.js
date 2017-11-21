var chocolateBars = ["snickers", "hundred grand", "katkit", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}
