let board = document.getElementById("boardArea");

let scoreTile1 = document.createElement("div");
scoreTile1.classList.add("scoreTile");
scoreTile1.style.position = "absolute";
scoreTile1.style.left = "440px";
scoreTile1.style.top = "200px";

let scoreTile2 = document.createElement("div");
scoreTile2.classList.add("scoreTile");
scoreTile2.style.position = "absolute";
scoreTile2.style.left = "20px";
scoreTile2.style.top = "200px";


for (let i = 0; i < 6; i++){
    let playTile = document.createElement("div");
    playTile.classList.add("playTile");
    playTile.style.position = "absolute";
    playTile.style.left = (80 + (60 * i)) + "px";
    playTile.style.top = "250px";
    board.appendChild(playTile);
}

board.appendChild(scoreTile1);

for (let i = 0; i < 6; i++){
    let playTile = document.createElement("div");
    playTile.classList.add("playTile");
    playTile.style.position = "absolute";
    playTile.style.left = (380 - (60 * i)) + "px";
    playTile.style.top = "200px";
    board.appendChild(playTile);
}

board.appendChild(scoreTile2);