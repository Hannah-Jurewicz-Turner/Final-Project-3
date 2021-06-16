// Connects the button to the funtion displayMessage.
document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  // Lets it so that if you click the button, the paragraph text will turn into the new paragraph text below.
  document.getElementById('paragraph').innerHTML = 'How to play: Below, you will see an image that you can click. Count how many times you have to click the screen before a different word appears. Put that number into the box and see if youre right!'
}

document.getElementById('button-two').addEventListener('click', makeGuess)
let userGuess = 0

function makeGuess () {
  // converts the guess inputted by user into an integer.
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // compares the correct number of clicks to the number that the user inputted and lets them know if they clicked too many times, not enough, or the perfect amount.
  const answer = 7
  if (userGuess < answer) {
    document.getElementById('answer').innerHTML = 'Not quite there yet, keep clicking!'
  } else if (userGuess > answer) {
    document.getElementById('answer').innerHTML = 'Too much clicking, slow down!'
  } else if (userGuess === answer) {
    document.getElementById('answer').innerHTML = 'Perfect amount of clicks! You can go back to the main page to play some more games.'
  } else {
    document.getElementById('answer').innerHTML = 'Invalid guess, try again!'
  }
}
