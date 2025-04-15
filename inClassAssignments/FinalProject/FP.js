// MOVEMENT AND LANDING DETECTION CODE:

// Movement:
    //playerTurn: Comment who's turn it is
    // players A and B each only get to move stones from 1 side of the board

    // have player pick a space on their side of the board

    // after player selects a space, it becomes empty. then
    // 1 stone is added to the space counterclockwise until original stoneCount ends
    // Special movement rule:
        // stones do not enter opponents score pit but instead skips it and keeps going



    
// Landing: based on where the last stone lands special condition occur.
    // Occupied space: nothing happens
    // Empty Space: your last stone and the stones on your opponents side directly across go into your score pit
    // Score pit: player gets to take an extra turn
function Landing(lastPiece) {
    
}
