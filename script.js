
function displayBoard(){
        const board = [
            ['O', '', ''],
            ['O', '', ''],
            ['O', '', ''],
        ]
        for (const row of board){
            return {board,row};
        }
    }

const game = displayBoard();
function checkWin(player){
    for (const row of game.board){
        if (row[0]==player && row[1]== player && row[2]== player){
            console.log(`Player ${player} Wins`);
        }
    }

    for (let i=0; i<3; i++){
        if (game.board[0][i]==player && game.board[1][i]==player && game.board[2][i]==player){
            console.log(`Player ${player} Wins`);
        }
    }
    return {player};
}
const player1 = checkWin('X');
const player2 = checkWin('O');


