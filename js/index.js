const numbers = [1,2,3,4,5,6,7,8,9,0,'.']
const operators = ['÷','X','+','-','=']
const auxiliaryOperators = ['AC','±','%']

const blocksRefs = {
  numbers:document.querySelector('.buttons__numbers'),
  operators:document.querySelector('.buttons__operators'),
  auxiliaryOperators:document.querySelector('.buttons__auxiliary-operators'),
}


function createMurkup (arr,block){
  const markup = arr.map(e => {
    return `<div data-number='${e}' class='button js-button'>${e}</div>`
  }) .join('')

  block.insertAdjacentHTML('afterbegin', markup)
}

createMurkup(numbers,blocksRefs.numbers)
createMurkup(operators,blocksRefs.operators)
createMurkup(auxiliaryOperators,blocksRefs.auxiliaryOperators)