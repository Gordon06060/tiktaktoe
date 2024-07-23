function displayBoard(){
        const board = [
            ['V', 'O', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'O'],
        ]
        for (const row of board){
            return {board};
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


//Display
function displayBoardWeb(item){
    const items = document.querySelector(item);
    items.addEventListener('click', moveFunction);
    let isXNext = true;
    
    function moveFunction(){
        if (isXNext){
            items.textContent = 'X';
        }
        else{
            items.textContent='O'
        }
        isXNext = !isXNext;
    }
}
for (let i=1; i<=9; i++){
    displayBoardWeb(`#item${i}`);
}

//This will be the function that handles the logic that changes the game elements as the screen changes









//Create a Grid where when a box is pressed in the grid, either the x or O appears 
//Then, make it so that when that grid is pressed, the board updates











