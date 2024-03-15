const matrixElement = document.getElementById('matrix');
const columns = window.innerWidth / 20; // Adjust the width for characters

// Initialize columns
for (let i = 0; i < columns; i++) {
  const column = document.createElement('div');
  column.innerHTML = Array.from({length: 100}, () => getRandomCharacter()).join('');
  matrixElement.appendChild(column);
  animateColumn(column);
}

function getRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function animateColumn(column) {
  setInterval(() => {
    column.innerHTML = getRandomCharacter() + column.innerHTML.substring(0, column.innerHTML.length - 1);
  }, 100);
}