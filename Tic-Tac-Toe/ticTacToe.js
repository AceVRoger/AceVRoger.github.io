let xTurn = true;

function changeMark (buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn){
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).classList.add("superSize");
            // TODO: Set X color
            document.getElementById(buttonId).style.color = "red";
            document.getElementById("gameStatus").innerHTML = "O's Turn";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
                        document.getElementById(buttonId).classList.add("superSize");
            // TODO: Set O color
            document.getElementById(buttonId).style.color = "blue";
            document.getElementById("gameStatus").innerHTML = "X's Turn";
        }

        xTurn = !xTurn;
        checkWin();
    }
}
function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a1").style.color = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b1").style.color = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c1").style.color = "";
    // TODO: clear the remaining buttons
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a2").style.color = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b2").style.color = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c2").style.color = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("a3").style.color = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b3").style.color = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c3").style.color = "";
    // TODO: reset the gameStatus to indicate whose turn it is for a new game

}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    let filled = a1 && b1 && c1 && a2 && b2 && c2 && a3 && b3 && c3;

    if (a1 == b1 && b1 == c1 && a1 == "X") {
        //TODO: Inform the player that X wins on the page
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    //TODO: Complete the logic for the remaining win possibilities
    else if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (a2 == b2 && b2 == c2 && a2 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (a3 == b3 && b3 == c3 && a3 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (a1 == a2 && a2 == a3 && a1 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (a1 == a2 && a2 == a3 && a1 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (b1 == b2 && b2 == b3 && b1 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (b1 == b2 && b2 == b3 && b1 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (c1 == c2 && c2 == c3 && c1 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (c1 == c2 && c2 == c3 && c1 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (a1 == b2 && b2 == c3 && a1 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (a3 == b2 && b2 == c1 && a3 == "X") {
        document.getElementById("gameStatus").innerHTML = "X Wins!!!";
    }
    else if (a3 == b2 && b2 == c1 && a3 == "O") {
        document.getElementById("gameStatus").innerHTML = "O Wins!!!";
    }
    else if (filled) {
        document.getElementById("gameStatus").innerHTML = "Tie";
    }

}