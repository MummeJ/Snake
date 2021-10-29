const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}
const centerBlock = document.getElementById('276');
let previousPos = parseInt(centerBlock.id);
let currentPos = parseInt(centerBlock.id);
centerBlock.style.backgroundColor = '#90002c';
let pos = document.getElementById(currentPos).getBoundingClientRect()
const generateFood = () => {
  let cell = Math.floor(Math.random() * (577 - 1) + 1)
  let foodCell = document.getElementById(cell)
  foodCell.style.backgroundColor = 'Green'
}
const gameOver = () => {
  currentPos = 276;
  document.getElementById(previousPos).style.backgroundColor = 'transparent';
  document.getElementById(currentPos).style.backgroundColor = '#90002c';
  previousPos = 276;
}
const checkKey = (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        try{
          currentPos -= 24;
          document.getElementById(previousPos).style.backgroundColor = 'transparent';
          document.getElementById(currentPos).style.backgroundColor = '#90002c';
          previousPos -= 24;
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        try{
          currentPos += 24;
          document.getElementById(previousPos).style.backgroundColor = 'transparent';
          document.getElementById(currentPos).style.backgroundColor = '#90002c';
          previousPos += 24;
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       let pos = document.getElementById(currentPos).getBoundingClientRect()
       currentPos --;
       if (currentPos === 0) {
         gameOver()
       }
       document.getElementById(previousPos).style.backgroundColor = 'transparent';
       document.getElementById(currentPos).style.backgroundColor = '#90002c';
       previousPos --;
       let newPos = document.getElementById(currentPos).getBoundingClientRect()
       if (pos.top != newPos.top) {
         gameOver()
       }
    }
    else if (e.keyCode == '39') {
       // right arrow
       let pos = document.getElementById(currentPos).getBoundingClientRect()
       currentPos ++;
       if (currentPos === 577) {
         gameOver()
       }
       document.getElementById(previousPos).style.backgroundColor = 'transparent';
       document.getElementById(currentPos).style.backgroundColor = '#90002c';
       previousPos ++;
       let newPos = document.getElementById(currentPos).getBoundingClientRect()
       if (pos.top != newPos.top) {
        gameOver()
       }
    }
}
document.onkeydown = checkKey;
generateFood()
