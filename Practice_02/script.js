// Retrieve wins and losses from localStorage or initialize to 0
let wins = parseInt(localStorage.getItem('wins')) || 0;
let losses = parseInt(localStorage.getItem('losses')) || 0;

// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let chancesLeft = 3;

// Get DOM elements
const instruction = document.querySelector('.instruction p:nth-child(3)');
const winsLosses = document.querySelector('.instruction p:nth-child(4)');
const buttons = document.querySelectorAll('.buttons button');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.reset-button');

// Update wins and losses display initially
updateWinsLosses();

// Function to check the user's guess
function checkGuess(guess, button) {
  if (guess === randomNumber) {
    result.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
    result.style.color = 'green';
    wins++;
    localStorage.setItem('wins', wins); // Update localStorage
    disableAllButtons();
    updateWinsLosses();
    setTimeout(reloadGame, 0); // Delay the reload logic
  } else {
    chancesLeft--;
    instruction.textContent = `${chancesLeft} chances left`;

    // Disable the clicked button
    button.disabled = true;
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';

    if (chancesLeft === 0) {
      result.textContent = `Game over! The correct number was ${randomNumber}.`;
      result.style.color = 'red';
      losses++;
      localStorage.setItem('losses', losses); // Update localStorage
      disableAllButtons();
      updateWinsLosses();
      setTimeout(reloadGame, 0); // Delay the reload logic
    } else {
      result.textContent = `Wrong guess! Try again.`;
      result.style.color = 'red';
    }
  }
}

// Function to disable all buttons
function disableAllButtons() {
  buttons.forEach(button => {
    button.disabled = true;
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';
  });
}

// Function to update wins and losses display
function updateWinsLosses() {
  winsLosses.textContent = `Won: ${wins} times, Lost: ${losses} times`;
}

// Function to reload the game
function reloadGame() {
  // Reload after 5 seconds
  const reloadTimeout = setTimeout(() => {
    window.location.reload(); // Reload the page
  }, 5000); // 5000 milliseconds = 5 seconds

  // Reload on click anywhere in the document body
  const reloadOnClick = () => {
    clearTimeout(reloadTimeout); // Clear the 5-second timeout
    window.location.reload(); // Reload the page
  };

  // Add the click event listener
  document.body.addEventListener('click', reloadOnClick, { once: true });
}

// Function to reset the game (including wins and losses)
function resetGame() {
  localStorage.removeItem('wins'); // Remove wins from localStorage
  localStorage.removeItem('losses'); // Remove losses from localStorage
  window.location.reload(); // Reload the page
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const guess = parseInt(button.textContent);
    checkGuess(guess, button); // Pass the button element to the function
  });
});

// Add event listener to reset button
resetButton.addEventListener('click', resetGame);