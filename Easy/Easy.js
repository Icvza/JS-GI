

let nameOne = 'Isaac'
let nameTwo = 'luciano'

function longestName(nameOne ,nameTwo) {
     let maxName = ''
     let leastName = ''
     if (nameOne.length > nameTwo.length){
          maxName = nameOne
          leastName = nameTwo
     } else {
          maxName = nameTwo
          leastName = nameOne
     }

     console.log(`The name ${maxName} is longer than ${leastName} by ${maxName.length-leastName.length} characters`)
}

longestName(nameOne ,nameTwo)




