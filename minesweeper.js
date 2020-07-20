document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{row: 1, col: 1, isMine: false, hidden: true},
    {row: 1, col: 2, isMine: false, hidden: true},
    {row: 1, col: 3, isMine: false, hidden: true},
    {row: 2, col: 1, isMine: true, hidden: true},
    {row: 2, col: 2, isMine: true, hidden: true},
    {row: 2, col: 3, isMine: false, hidden: true},
    {row: 3, col: 1, isMine: false, hidden: true},
    {row: 3, col: 2, isMine: true, hidden: true},
    {row: 3, col: 3, isMine: false, hidden: true}
  ]
}

function startGame () {
  for ( i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    document.addEventListener("click", checkForWin)
    document.addEventListener("contextmenu", checkForWin)
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let count4 = 0
  for ( i=0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === false) {
      count1++
    }

    if (board.cells[i].hidden === false){
      count2++
    }
      
    if (board.cells[i].isMine === true) {
      count3++
    }

    if (board.cells[i].hidden === false){
      count4++
    }
  }
  console.log(count3)
  console.log(count4)
  console.log(board)

    // if (count3 === count4) {
    //   console.log("YES")
    //   // You can use this function call to declare a winner (once you've
    //   // detected that they've won, that is!)
    //   lib.displayMessage('You win!')
    // }
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  //Return the number of cells around the current cell where isMine ==true
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0;
    for (let i = 0; i < surrounding.length; i++) {
      if (surrounding[i]['isMine'] === true) {
        count++
      }
    }
  return count
}