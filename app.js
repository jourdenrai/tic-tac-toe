const GameBoard = (() => {
    var gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    return gameBoard
})();

const player = (name) => {
    return {name}
}
var playerTurn = true
var board = document.querySelector("#board")
    var player1 = prompt('Player 1:')
    var player2 = prompt('Player 2:')
    var names = document.querySelector('#names')

    var reset = document.querySelector('#reset')
    reset.addEventListener('click',() => {
        
    })

function render(){
    
    names.textContent = `${player1} is X, ${player2} is O`
    GameBoard.forEach(box =>{
        var element = document.createElement('div')
        element.classList.add('element')
        element.classList.add('content')
        element.textContent = box
        board.appendChild(element)
    })
    var boardPieces = document.querySelectorAll('.element')
    boardPieces.forEach((piece) =>{
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
            
        })
        
    })
}

render()