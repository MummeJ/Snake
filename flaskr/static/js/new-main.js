const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}

snake.head.cell

let speed = 1
const pause = (num) => {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, num));
}

const down = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell = snake.head.cell + 24
  }
  else{
    snake.getLast().cell = snake.getLast().cell + 24
    snake.head.cell = snake.head.cell + 24
  }
}
const up = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell = snake.head.cell - 24
  }
  else{
    snake.getLast().cell = snake.getLast().cell - 24
    snake.head.cell = snake.head.cell - 24
  }
}
const left = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell --
  }
  else{
    let node = snake.head;
    let next = node.next
    while (!next.cell) {
      next.cell = node.cell;
      node = node.next
    }
  }
    snake.head.cell --
    // snake.getLast().cell --
    // snake.head.cell --
  }
const right = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell ++
  }
  else{
    snake.getLast().cell ++
    snake.head.cell ++
  }
}
let upArrow = false;
let downArrow = false;
let leftArrow = false;
let rightArrow = false;
const checkKey = (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        downArrow = false;
        leftArrow = false;
        rightArrow = false;
        upArrow = true;
    }
    else if (e.keyCode == '40') {
        // down arrow
        upArrow = false;
        leftArrow = false;
        rightArrow = false;
        downArrow = true;
    }
    else if (e.keyCode == '37') {
       // left arrow
       upArrow = false;
       downArrow = false;
       rightArrow = false;
       leftArrow = true;
    }
    else if (e.keyCode == '39') {
       // right arrow
       upArrow = false;
       downArrow = false;
       leftArrow = false;
       rightArrow = true;
    }
}

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
  shift() {
    let node = this.head;
    let next = node.next
    while (!next.cell) {
      next.cell = node.cell;
      node = node.next
    }
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
let gameOver = false
const startGame = async () => {
  while (!gameOver){
    let node, snakeBody, tail;
    node = snake.head;
    if (snake.size != 1 ){
      console.log('test')
      tail = document.getElementById(snake.getLast().cell)
      tail.style.backgroundColor = 'Transparent'
    }
    for (let num = 0; num < snake.size; num ++) {
      if (snake.size === 1){
        snakeBody = document.getElementById(node.cell)
        snakeBody.style.backgroundColor = 'Green'
        break;
      }
      else {
        snakeBody = document.getElementById(node.cell)
        snakeBody.style.backgroundColor = 'Green'
        tail = document.getElementById(snake.getLast().cell)
        tail.style.backgroundColor = 'Transparent'
        // tail.style.backgroundColor = 'Transparent'
        node = node.next
      }
    }
    console.log(snake);
    await pause(1000 / speed);
    switch (true) {
      case (downArrow):
        down();
        break;
      case (upArrow):
        up();
        break;
      case (leftArrow):
        left();
        break;
      case (rightArrow):
        right();
        break;
    }
    // gameOver = true;
  }};

let snake = new LinkedList;
snake.add(276)
snake.add(252)
snake.add(228)
document.onkeydown = checkKey;
startGame()
