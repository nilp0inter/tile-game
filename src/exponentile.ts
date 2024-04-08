import readline from 'readline';
import {
  generateBoard,
  getPositionsThatAlmostMatch,
  swapTile,
  type Board,
  type Position
} from "../hooks/useBoard.ts";

// Initialize the game board
let board = generateBoard(8);

// Initialize total game points
let score = 0;

function transformBoard(board: Board): number[][] {
  return board.map(row =>
    row.map(tile => Math.pow(2, tile.value))
  );
}

// Function to print the board state along with the hints and total points
function printBoardState(board: Board) {
  const transformedBoard = transformBoard(board);
  const hintPositions = getPositionsThatAlmostMatch(board);
  const output = {
    board: transformedBoard,
    hint: hintPositions || [],
    score: score // Ensure total points are included in the output
  };
  console.log(JSON.stringify(output));
}

// Print initial board, hints, and initial total points
printBoardState(board);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  try {
    const positions: Position[] = JSON.parse(input);
    if (positions.length !== 2) {
      console.log(JSON.stringify({ error: "Invalid input format. Expected two positions." }));
      return;
    }

    const boards = swapTile(positions[0], positions[1], board);
    board = boards[boards.length - 1].board;

    // Sum all points from the returned boards and add to score
    score += boards.reduce((acc, current) => acc + (current.points || 0), 0);

    printBoardState(board);

    if (!getPositionsThatAlmostMatch(board)) {
      rl.close();
    }
  } catch (err) {
    console.log(JSON.stringify({ error: "Error processing input." }));
  }
});
