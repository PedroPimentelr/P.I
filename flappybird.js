
//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34; //width/heigth ratio = 408/228 = 17/12
let birdHeight = 24;
let birdX = boardWidth/8
let birdY = boardHeight/2
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //usado para desenhar na tela 
  
    //desenho flappy bird
    context.fillStyle = "green";
    context.fillRect(bird.x, bird.y, bird.width, bird.height);

    //carregar imagens

    birdImg = new Image();
    birdImg.src = "(/img/Flappy-Bird-.png)";
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);


}