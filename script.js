//Display
function displayBoardWeb(itemSelector){
    const items = document.querySelectorAll(itemSelector);
    let isXNext = true;
    items.forEach(function (item){
        //item takes on each const of items
        item.addEventListener('click',function moveFunction(){
            if (isXNext){
                item.textContent = 'X';
                changeBoard(item, 'X');
                //write a function that, with each click, matches the text content X to the cell that it is being clicked
            }
            else{
                item.textContent='O'
                changeBoard(item, 'O');
            }
            
            isXNext = !isXNext;
            const player1 = checkWin('X');
            const player2 = checkWin('O');

            if (!player1 && !player2){
                if (checkTie()){
                    console.log('There is a Tie')
                }
            }
        });
    });
};
displayBoardWeb('div[id^="item"]');




function makedisplayBoard(){
        const board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
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



function changeBoard(item, value){
    const id = item.id;
    //this gets the id of the item, for example item00
    const row = parseInt(id.charAt(4));
    const col = parseInt(id.charAt(5));
    displayBoard.updateBoard(row, col, value);
}




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




















