let x = parseInt(prompt('GIVE ME A NUMBER'))
let operator = prompt('GIVE ME A SIGN ')
let y = parseInt(prompt('GIVE ME ANOTHER NUMBER'))

function compute(x, operator, y){
     if(operator === '+'){
          add(x, operator, y)
     } else if (operator === '-'){
          subtract(x, operator, y)
     } else if (operator === '*'){
          multuply(x, operator, y)
     } else if (operator === '/'){
          divide(x, operator, y)
     }
}

function add(x, operator, y){
     alert(`${x} ${operator} ${y} = ${x+y}`)
}
function subtract(x, operator, y){
     alert(`${x} ${operator} ${y} = ${x-y}`)
}

function multuply(x, operator, y){
     alert(`${x} ${operator} ${y} = ${x*y}`)
}

function divide(x, operator, y){
     alert(`${x} ${operator} ${y} = ${x/y}`)
}

compute(x, operator, y)

// let x = parseInt(prompt('GIVE ME A NUMBER'))
// let operator = prompt('GIVE ME A SIGN ')
// let y = parseInt(prompt('GIVE ME ANOTHER NUMBER'))

// function compute(x, operator, y){
//      if(operator === '+'){
//           alert(`${x} ${operator} ${y} = ${x+y}`)
//      } else if (operator === '-'){
//           alert(`${x} ${operator} ${y} = ${x-y}`)
//      } else if (operator === '*'){
//           alert(`${x} ${operator} ${y} = ${x*y}`)
//      } else if (operator === '/'){
//           alert(`${x} ${operator} ${y} = ${x/y}`)
//      }
// }

// compute(x, operator, y)













// let x = parseInt(prompt('GIVE ME A NUMBER'))
// let operator = prompt('GIVE ME A SIGN ')
// let y = parseInt(prompt('GIVE ME ANOTHER NUMBER'))

// function compute(x, operator, y){
//      if(operator === '+'){
//           alert(`${x} ${operator} ${y} = ${x+y}`)
//      } else if (operator === '-'){
//           alert(`${x} ${operator} ${y} = ${x-y}`)
//      } else if (operator === '*'){
//           alert(`${x} ${operator} ${y} = ${x*y}`)
//      } else if (operator === '/'){
//           alert(`${x} ${operator} ${y} = ${x/y}`)
//      }
// }

// compute(x, operator, y)
