let usernameArray = [];

const firstName = document.getElementById('js-first-name');
const lastName = document.getElementById('js-last-name');
const userMail = document.getElementById('js-user-email');
const submitButton = document.getElementById('js-submit');
const usernameDisplay = document.getElementById('username-display'); 

console.log(firstName);
console.log(lastName);
console.log(userMail);
console.log(submitButton);

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const nameOfUser = firstName.value.trim() + ' ' + lastName.value.trim(); 
  console.log(nameOfUser);

  if (nameOfUser !== ' ') { 

    const toLowercaseName = nameOfUser.toLowerCase(); 
    console.log(toLowercaseName);

    const nameWithoutSpaces = toLowercaseName.replace(/[^a-z]/g, ''); 
    console.log(nameWithoutSpaces);

    const countLetter = nameWithoutSpaces.length; 
    console.log(countLetter);

    const userName = `@${nameWithoutSpaces}${countLetter}`; 
    console.log(userName);

    
    firstName.value = '';
    lastName.value = '';
    userMail.value = '';

    
    usernameDisplay.textContent = `Username: ${userName}`;
    usernameDisplay.classList.add('visible');
  } else {
    usernameDisplay.classList.add('visible'); 
    usernameDisplay.textContent = 'Please enter a valid name.';    
  }
});