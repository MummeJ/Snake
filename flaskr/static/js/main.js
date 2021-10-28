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

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        try{
          currentPos -= 24;
          document.getElementById(previousPos).style.backgroundColor = 'transparent';
          document.getElementById(currentPos).style.backgroundColor = '#90002c';
          previousPos -= 24;
        } catch{
          currentPos = 276;
          document.getElementById(previousPos).style.backgroundColor = 'transparent';
          document.getElementById(currentPos).style.backgroundColor = '#90002c';
          previousPos = 276;
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
          currentPos = 276;
          document.getElementById(previousPos).style.backgroundColor = 'transparent';
          document.getElementById(currentPos).style.backgroundColor = '#90002c';
          previousPos = 276;
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       let currentDiv = document.getElementById(currentPos)
       let pos = currentDiv.getBoundingClientRect()
       let pos2 = pos.left
       if (pos2 < 842){
         console.log(pos2)
         currentPos --;
         document.getElementById(previousPos).style.backgroundColor = 'transparent';
         document.getElementById(currentPos).style.backgroundColor = '#90002c';
         previousPos --;
       }
       else{
         currentPos = 276;
         document.getElementById(previousPos).style.backgroundColor = 'transparent';
         document.getElementById(currentPos).style.backgroundColor = '#90002c';
         previousPos = 276;
       }

    }
    else if (e.keyCode == '39') {
       // right arrow
       currentPos ++;
       document.getElementById(previousPos).style.backgroundColor = 'transparent';
       document.getElementById(currentPos).style.backgroundColor = '#90002c';
       previousPos ++;
    }

}
