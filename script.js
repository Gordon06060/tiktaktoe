function displayBoard(){
        const board = [
            ['V', 'O', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'O'],
        ]
        for (const row of board){
            return {board,row};
        }
    }

const game = displayBoard();

function checkTie(){
    for (const row of game.board){
        for (const space of row){
            if (space===''){
                return false
            }
        }
    }
    return true;
}

function checkWin(player){
    for (const row of game.board){
        if (row[0]==player && row[1]== player && row[2]== player){
            console.log(`Player ${player} Wins`);
            return true;
        }
        
    }
    //Check Rows 
    for (let i=0; i<3; i++){
        if (game.board[0][i]==player && game.board[1][i]==player && game.board[2][i]==player){
            console.log(`Player ${player} Wins`);
            return true;
        }
    }
    //Check Columns 
    if ((game.board[0][0]== player && game.board[1][1]== player && game.board[2][2] == player) || (game.board[0][2]== player && game.board[1][1]== player && game.board[2][0] == player)){
        console.log(`Player ${player} Wins`);
        return true;
    }
}

const player1 = checkWin('X');
const player2 = checkWin('O');

if (!player1 && !player2){
    if (checkTie()){
        console.log('There is a Tie')
    }
}


//Display Logic


//Create a Grid where when a box is pressed in the grid, either the x or O appears 
//Then, make it so that when that grid is pressed, the board updates










// function displayBoardWeb(line, className){
//     const container = document.querySelector('#container');
//     const content = document.createElement('span');
//     content.classList.add(className);
//     content.textContent = line;
//     container.appendChild(content);
//     return {line, className};
// }
// //Want to make a factory function where for each tile, I can call it, giving it a different class name
// const tile1 = displayBoardWeb(game.board[0][0], 'tile1');

// const gamerow1 = displayBoardWeb(game.board[0][0]);
// const gamerow12 = displayBoardWeb(game.board[0][1]);
// const gamerow13 = displayBoardWeb(game.board[0][2]);



// function addMarks(){
//     function markfunction(){
//         game.board[0][0]=='X';
//     }
// }

// addMarks();





