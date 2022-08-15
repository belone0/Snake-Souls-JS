import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
 

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {

    soulsDeath()
    
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
  
  
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// game over
function soulsDeath(){
  var htmlBody = document.querySelector('body')
  htmlBody.innerHTML = ('<img src="https://www.escapistmagazine.com/wp-content/uploads/2021/03/youdied.jpg" width="60%">  ')

  var style = document.querySelector('style')
  style.innerHTML = ('body{background-color: black;} img{margin-left: 20%; margin-right: 20%; margin-top: 5%} button{color: red; width: 200px; height:100px ; margin-left: 40%; background-color: black; font-size: 200%; font-family: arial;  }');

  music()

}
//contador almas 
export function soulsCount(){
  var count = document.querySelector('span')
count.innerText = parseInt(count.innerHTML) + 50
}
// musica
var musica = new Audio('music.mp3');
var deathSound = new Audio('sekiroDeath.mp3')
var contador = false

window.onfocus = music()

function music(){
  if(contador == false ){
  console.log("teste")
  musica.play();
  }
  else{
    musica.pause()
    deathSound.play() 
    deathSound.volume = 1
  }
  contador = true
}


