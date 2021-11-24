const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}
const generateFood = () => {
  let cell = Math.floor(Math.random() * (577 - 1) + 1)
  newFood.cell = cell
  let foodCell = document.getElementById(cell)
  foodCell.style.backgroundColor = 'Green'
}
const centerBlock = document.getElementById('276');
let previousPos = parseInt(centerBlock.id);
let currentPos = parseInt(centerBlock.id);
centerBlock.style.backgroundColor = '#90002c';
// let pos = document.getElementById(currentPos).getBoundingClientRect()
let startingPos = parseInt(centerBlock.id);
class Node {
  constructor(data) {
    this.data = data;
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
}
let snake = new LinkedList();
snake.add(startingPos)
snake.add(previousPos)
console.log(snake.head.data, snake.getLast())

class Food {
  constructor(cell){
    this.cell = cell;
    this.isEaten = null;
}
}
let newFood = new Food(20)
console.log(newFood)



const gameOver = () => {
  snake.head.data = 276;
  document.getElementById(snake.getLast().data).style.backgroundColor = 'transparent';
  document.getElementById(snake.head.data).style.backgroundColor = '#90002c';
  snake.getLast().data = 276;
  generateFood()
}
const checkKey = (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        try{
          snake.head.data -= 24;
          document.getElementById(snake.getLast().data).style.backgroundColor = 'transparent';
          document.getElementById(snake.head.data).style.backgroundColor = '#90002c';
          snake.getLast().data -= 24;
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        try{
          snake.head.data += 24;
          document.getElementById(snake.getLast().data).style.backgroundColor = 'transparent';
          document.getElementById(snake.head.data).style.backgroundColor = '#90002c';
          snake.getLast().data += 24;
        }catch{
          gameOver()
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       let pos = document.getElementById(snake.head.data).getBoundingClientRect()
       snake.head.data --;
       if (snake.head.data === 0) {
         gameOver()
       }
       document.getElementById(snake.getLast().data).style.backgroundColor = 'transparent';
       document.getElementById(snake.head.data).style.backgroundColor = '#90002c';
       snake.getLast().data --;
       let newPos = document.getElementById(snake.head.data).getBoundingClientRect()
       if (pos.top != newPos.top) {
         gameOver()
       }
    }
    else if (e.keyCode == '39') {
       // right arrow
       let pos = document.getElementById(snake.head.data).getBoundingClientRect()
       snake.head.data ++;
       if (snake.head.data === 577) {
         gameOver()
       }
       document.getElementById(snake.getLast().data).style.backgroundColor = 'transparent';
       document.getElementById(snake.head.data).style.backgroundColor = '#90002c';
       snake.getLast().data ++;
       let newPos = document.getElementById(snake.head.data).getBoundingClientRect()
       if (pos.top != newPos.top) {
        gameOver()
       }
    }
}
document.onkeydown = checkKey;
generateFood()
