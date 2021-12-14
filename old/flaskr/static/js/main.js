const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}
const generateFood = () => {
  let oldCell = document.getElementById(food.cell)
  oldCell.style.backgroundColor = 'transparent'
  food.cell = Math.floor(Math.random() * (577 - 1) + 1)
  let newCell = document.getElementById(food.cell)
  newCell.style.backgroundColor = 'Green'
}

const eatFood = () => {
  if (snake.head.cell === food.cell){
  food.isEaten = true;
  snake.insertAt(food.cell, 0)
  console.log(snake)}


}
const centerBlock = document.getElementById('276');
let previousPos = parseInt(centerBlock.id);
let currentPos = parseInt(centerBlock.id);
centerBlock.style.backgroundColor = '#90002c';
// let pos = document.getElementById(currentPos).getBoundingClientRect()
let startingPos = parseInt(centerBlock.id);
class Node {
  constructor(cell) {
    this.cell = cell;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null){
        this.head = node;
    }
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
      }
    this.size++;
    }

  insertAt(element, index) {
    // creates a new node
    var node = new Node(element);
    var curr, prev;

    curr = this.head;

    // add the element to the
    // first index
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    }
    else {
      curr = this.head;
      var it = 0;

      // iterate over the list to find
      // the position to insert
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }

    // adding an element
      node.next = curr;
      prev.next = node;
    }
  this.size++;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next
    }
  }
  nextToLast() {
    let node = this.head;
    let last = this.head.next;
    while (last) {
      if (last.next === null){
        return node;
      }
      last = last.next
      node = node.next

    }
  }
}
let snake = new LinkedList();
snake.add(startingPos)
snake.add(previousPos)
console.log(snake.head.cell, snake.getLast())

class Food {
  constructor(cell=1){
    this.cell = cell;
    this.isEaten = null;
  }
}
let food = new Food()




const gameOver = () => {
  snake.head.cell = 276;
  document.getElementById(snake.getLast().cell).style.backgroundColor = 'transparent';
  document.getElementById(snake.head.cell).style.backgroundColor = '#90002c';
  snake.getLast().cell = 276;
  generateFood()
}
const checkKey = (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        try{
          snake.getLast().cell = snake.head.cell
          snake.head.cell -= 24;
          document.getElementById(snake.getLast().cell).style.backgroundColor = 'transparent';
          document.getElementById(snake.head.cell).style.backgroundColor = '#90002c';
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        try{
          eatFood()
          snake.getLast().cell = snake[snake.size - 1].data
          snake.head.cell += 24;
          document.getElementById(snake.getLast().cell).style.backgroundColor = 'transparent';
          document.getElementById(snake.head.cell).style.backgroundColor = '#90002c'
          console.log(snake)
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       let pos = document.getElementById(snake.head.cell).getBoundingClientRect()
       snake.head.cell --;
       if (snake.head.cell === 0) {
         gameOver()
       }
       document.getElementById(snake.getLast().cell).style.backgroundColor = 'transparent';
       document.getElementById(snake.head.cell).style.backgroundColor = '#90002c';
       snake.getLast().cell --;
       let newPos = document.getElementById(snake.head.cell).getBoundingClientRect()
       if (pos.top != newPos.top) {
         gameOver()
       }
    }
    else if (e.keyCode == '39') {
       // right arrow
       let pos = document.getElementById(snake.head.cell).getBoundingClientRect()
       snake.head.cell ++;
       if (snake.head.cell === 577) {
         gameOver()
       }
       document.getElementById(snake.getLast().cell).style.backgroundColor = 'transparent';
       document.getElementById(snake.head.cell).style.backgroundColor = '#90002c';
       snake.getLast().cell ++;
       let newPos = document.getElementById(snake.head.cell).getBoundingClientRect()
       if (pos.top != newPos.top) {
        gameOver()
       }
    }
}
document.onkeydown = checkKey;
generateFood()
