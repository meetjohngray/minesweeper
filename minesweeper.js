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

// Thanks Cam Shaw! https://camshaw11.github.io/minesweeper/
function makeBoard() {
  board = {}
  grid = 5
  board.cells = []
  // every time the outer loop runs once -
  // the inner loop runs 3 times, giving our grid shape
  // ex. row 0 = col 1, 2, 3
  for (let i = 0; i < grid; i++) {
    for(let j = 0; j < grid; j++) {
      let cell = {
        row: i,
        col: j,
        isMine: Math.random() >= 0.8,  // 20% chance of true
        //isMarked: false,
        hidden: true
      }
      //push new object to cells array
      board.cells.push(cell)
    } 
  }
  //console.log(board)
  return board 
}
  
makeBoard()

function startGame () {
  makeBoard()
  for ( i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    document.addEventListener("click", checkForWin)
    document.addEventListener("contextmenu", checkForWin)
  }
  document.getElementById("reset").addEventListener("click", resetBoard)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function resetBoard(){
  location.reload()
}
// function resetGame () {
// document.getElementById("reset").addEventListener("click", myFunction());
// }

// document.getElementById("reset").addEventListener("click", function(){
//   alert("Hello World");
// })


// function myFunction() {
//     alert("Hello World");
//   }
//myFunction();
//}

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


// function makeBoard() {
//   board = {}
//   board.cells = []
//   let colNum = 1
//   let colNum2 = 1
//   let colNum3 = 1
//   for (var x = 0; x < 9; x++) {
//     if (x <= 2) {
//       board['cells'][x] = {row: 1, col: colNum, isMine: Math.random() >= 0.5, hidden: true}
//       colNum++
//     } else if (x > 2 && x < 6) {
//       board['cells'][x] = {row: 2, col: colNum2, isMine: Math.random() >= 0.5, hidden: true}
//       colNum2++
//     } else {
//       board['cells'][x] = {row: 3, col: colNum3, isMine: Math.random() >= 0.5, hidden: true}
//       colNum3++
//     } 
//   }
//   console.log(board)
//   return board 
// }

//   board['cells'][x] = {row: 1, col: x + 1, isMine: Math.random() >= 0.5, hidden: true}
  //     for (var i = 1; i <= 3; i++) {
  //      board['cells'][x]['col'] = i
  //      for (var j = 1; j <= 3; j++){
  //        board['cells'][x]['col'] = j
  //      }
  //   }
  // }


  //board.cells = [{row: '', col: '', isMine: Math.random() >= 0.5, hidden: true}]
  //var num = 1
  // let colNum2 = 1
  // let colNum3 = 1

   //  for (var x = 0; x <= 3; x++) { 
      //   board['cells'][x] = {row: '', col: '', isMine: Math.random() >= 0.5, hidden: true}
      //   board['cells'][x]['row'] = x + 1
      //   board['cells'][x]['col'] = x + 1
  //   if (x <= 2) {
  //     board['cells'][x] = {row: 1, col: colNum, isMine: Math.random() >= 0.5, hidden: true}
  //     colNum++
  //   } else if (x > 2 && x < 6) {
  //     board['cells'][x] = {row: 2, col: colNum2, isMine: Math.random() >= 0.5, hidden: true}
  //     colNum2++
  //   } else {
  //     board['cells'][x] = {row: 3, col: colNum3, isMine: Math.random() >= 0.5, hidden: true}
  //     colNum3++
//}
//console.log(board)