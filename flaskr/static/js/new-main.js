const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}


let speed = 15
const pause = (num) => {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, num));
}

const down = () => {
  if (gameOver) {
    startGame()
  }
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell = snake.head.cell + 24
  }
  else{
  snake.shift(snake.head.cell + 24)
  }
  if (snake.head.cell > 576) {
    gameOver = true
  }
}
const up = () => {
  if (gameOver) {
    startGame()
  }
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell = snake.head.cell - 24
  }
  else{
    snake.shift(snake.head.cell - 24)
  }
  if (snake.head.cell < 1) {
    gameOver = true
  }
}
const left = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell --
  }
  else{
    let pos = document.getElementById(snake.head.cell).getBoundingClientRect()
    snake.shift(snake.head.cell - 1)
    if (snake.head.cell < 1) {
      gameOver = true
    }
    else{
      let newPos = document.getElementById(snake.head.cell).getBoundingClientRect()
      if (pos.top != newPos.top) {
        gameOver = true
      }
    }
  }
}
const right = () => {
  if (snake.head.next === null) {
    snake.add(snake.head.cell)
    snake.head.cell ++
  }
  else{
    let pos = document.getElementById(snake.head.cell).getBoundingClientRect()
    snake.shift(snake.head.cell + 1)
    if (snake.head.cell > 576) {
      gameOver = true
    }
    else {
      let newPos = document.getElementById(snake.head.cell).getBoundingClientRect()
      if (pos.top != newPos.top) {
        gameOver = true
      }
    }
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
        if(gameOver) {
          gameOver = false
          startGame()
        }
        downArrow = false;
        leftArrow = false;
        rightArrow = false;
        upArrow = true;
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(gameOver) {
          gameOver = false
          startGame()
        }
        upArrow = false;
        leftArrow = false;
        rightArrow = false;
        downArrow = true;
    }
    else if (e.keyCode == '37') {
       // left arrow
       if(gameOver) {
         gameOver = false
         startGame()
       }
       upArrow = false;
       downArrow = false;
       rightArrow = false;
       leftArrow = true;
    }
    else if (e.keyCode == '39') {
     // right arrow
     if(gameOver) {
       gameOver = false
       startGame()
     }
     upArrow = false;
     downArrow = false;
     leftArrow = false;
     rightArrow = true;
  }
}

const reset = () => {
  for (let id = 1; id < 577; id ++){
    cell = document.getElementById(id)
    cell.style.backgroundColor = 'Transparent'
  }
  upArrow = false;
  downArrow = false;
  leftArrow = false;
  rightArrow = false;
  snake.clear()
  snake.add(276)
  snakeBody = document.getElementById(snake.head.cell)
  snakeBody.style.backgroundColor = 'Green'
  // gameOver = false
  console.log(snake)
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
  shift(val) {
    let node = this.head
    let list = []
    list.push(val)
    while(node.next){
      list.push(node.cell)
      node = node.next
    }
    node = this.head
    for (let i = 0; i < list.length; i++){
      node.cell = list[i]
      node = node.next
    }
  }
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head === null){
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
  clear() {
    this.head = null;
    this.size = 0
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
let gameOver = true
const startGame = async () => {
  while (!gameOver){
    console.log('while loop test')
    let node, snakeBody, tail;
    node = snake.head;
    if (snake.size != 1 ){
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
    await pause(1000 / speed).then().catch(err => console.log('test'));
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
    if (gameOver){
      console.log('test')
      reset()
    }
  }};

let snake = new LinkedList;
snake.add(276)
snakeBody = document.getElementById(snake.head.cell)
snakeBody.style.backgroundColor = 'Green'
document.onkeydown = checkKey;
// startGame()
