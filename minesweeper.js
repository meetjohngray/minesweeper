document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// const board = (size) => {
//   let cells = []
//   console.log(cells)
//   for (let i = 1; i <= size; i++){
//     console.log('Hello')
//     cell[i] = {row: i, col: i, isMine: true, hidden: true}
//   }

// }

// var board = {}
// board.cells = []
// let colNum = 1
// let colNum2 = 1
// let colNum3 = 1
// for (var x = 0; x < 9; x++) {
//   if (x <= 2) {
//     board['cells'][x] = {row: 1, col: colNum, isMine: false, hidden: true}
//     colNum++
//   } else if (x > 2 && x < 6) {
//     board['cells'][x] = {row: 2, col: colNum2, isMine: false, hidden: true}
//     colNum2++
//   } else {
//     board['cells'][x] = {row: 3, col: colNum3, isMine: false, hidden: true}
//     colNum3++
//   }  
// }
//  console.log(board)

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
console.log(board)

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

    if (board.cells[i].isMarked === true){
      count4++
    }
  }
    if ((count1 === count2) && (count3 === count4)) {    
    // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
      lib.displayMessage('You win!')
    }
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