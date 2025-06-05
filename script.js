const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createBox() {
  const box = document.createElement('div');
  const size = 40;
  const x = Math.random() * (gameArea.clientWidth - size);
  const y = Math.random() * (gameArea.clientHeight - size);

  box.className = 'absolute bg-red-500 rounded-md cursor-pointer';
  box.style.width = size + 'px';
  box.style.height = size + 'px';
  box.style.left = x + 'px';
  box.style.top = y + 'px';

  box.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    box.remove();
    spawnBox();
  });

  gameArea.appendChild(box);
}

function spawnBox() {
  setTimeout(createBox, 500);
}

spawnBox();
