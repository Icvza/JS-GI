let speech = prompt('What you got to say?')

function typeOfSpeach(speech){
     if (speech.toUpperCase() === speech){
          console.log('SHOUTING')
     } else if (speech.toLowerCase() === speech) {
          console.log('whispers')
     } else {
          console.log('Normal')
     }
}

typeOfSpeach(speech)