


function displayBoard(){
        const board = [
            ['X', 'O', 'X'],
            ['O', 'O', 'X'],
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




