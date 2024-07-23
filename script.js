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



function makedisplayBoard(){
        const board = [
            ['V', 'O', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'O'],
        ];
        function updateBoard(row,col,value){
            board[row][col]=value;
        };
        function getBoard(){
            return {board};
        };

        return {getBoard, updateBoard};
    };
const displayBoard = makedisplayBoard();
const gameBoard = displayBoard.getBoard();
//I can now use displayBoard.updateBoard to change the values of the board

function changeBoard(){
    const item1 = document.querySelector('#item1');
    const item1Text = item1.textContent;

    function updateBoardTile(){
        displayBoard.updateBoard(0,0,item1Text);
    }
    return {updateBoardTile};
}

const move = changeBoard();
move.updateBoardTile();




function checkTie(){
    for (const row of gameBoard.board){
        for (const space of row){
            if (space===''){
                return false
            }
        }
    }
    return true;
}

function checkWin(player){
    for (const row of gameBoard.board){
        if (row[0]==player && row[1]== player && row[2]== player){
            console.log(`Player ${player} Wins`);
            return true;
        }
        
    }
    //Check Rows 
    for (let i=0; i<3; i++){
        if (gameBoard.board[0][i]==player && gameBoard.board[1][i]==player && gameBoard.board[2][i]==player){
            console.log(`Player ${player} Wins`);
            return true;
        }
    }
    //Check Columns 
    if ((gameBoard.board[0][0]== player && gameBoard.board[1][1]== player && gameBaord.board[2][2] == player) || (gameBoard.board[0][2]== player && gameBoard.board[1][1]== player && gameBoard.board[2][0] == player)){
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
















