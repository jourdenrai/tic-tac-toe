const GameBoard = (() => {
    var gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    return gameBoard
})();


var playerTurn = true
var board = document.querySelector("#board")
var reset = document.querySelector('#reset')

var num = 0

var winArray = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]]; 

function render(){
    //make grid
    GameBoard.forEach(box =>{
        
        var element = document.createElement('div')
        element.classList.add('element')
        element.id = num
        element.classList.add('content')
        element.textContent = box
        board.appendChild(element)
        num++

    })
    var boardPieces = document.querySelectorAll('.element')
    
    boardPieces.forEach((piece) =>{
        
        reset.addEventListener('click',() =>{
                    location.reload()
                        // piece.textContent = ' '
                        // playerTurn = true
                    })
                
        piece.addEventListener('click',(e)=>{
            
            if(playerTurn == true){
                if(e.target.textContent === ' '){
                    var choice = 'x'
                    e.target.textContent = choice
                    playerTurn = false
                }
            }
            else{
                if(e.target.textContent === ' '){
                    var choice = 'o'
                    e.target.textContent = choice
                    playerTurn = true
                }  
            }
            
            for(let i = 0;i < winArray.length;i++){
                var xCount = 0
                var oCount = 0
                for(let j = 0; j < winArray[i].length;j++){
                    if(boardPieces[winArray[i][j]].textContent === 'x'){
                        xCount++
                        if(xCount === 3){
                            alert('X wins')
                            location.reload()
                        }   
                    }
                    else if(boardPieces[winArray[i][j]].textContent === 'o'){
                        oCount--
                        if(oCount === -3){
                            alert('O wins')
                            location.reload()
                        }
                    }
                }
            }
        })       
    })  
}

render()