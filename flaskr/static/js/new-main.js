const grid = document.querySelector('.grid');
for (let i = 1; i < 577; i++) {
  const div = document.createElement('div')
  div.className = 'block'
  div.setAttribute('id', i)
  grid.appendChild(div);
}


const timeout = () => {
  return null
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
const startGame = () => {
  while (!gameOver){
    let node, snakeBody;
    node = snake.head;
    console.log(snake.size)
    for (let num = 0; num < snake.size; num ++) {
      if (snake.size === 1){
        snakeBody = document.getElementById(node.cell)
        snakeBody.style.backgroundColor = 'Green'
        break;
      }
      else {
        snakeBody = document.getElementById(node.cell)
        snakeBody.style.backgroundColor = 'Green'
        node = node.next
        console.log('test')
      }
    }
    snake.add(snake.getLast().cell + 24)
    setTimeout(startGame, 1000);
    // gameOver = true;
  }};

let snake = new LinkedList;
snake.add(276)
snake.add(252)
startGame()
