const GameBoard = (() => {
    var gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    return gameBoard
})();

const player = (name) => {
    return {name}
}

function render(){
    var board = document.querySelector("#board")
    
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
            //if player1's turn
            var choice = 'x'
            //if player2's turn
            //var choice = 'o'
            if(e.target.textContent === ' ') e.target.textContent = choice
            
        })
        
    })
}

render()