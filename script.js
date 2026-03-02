let cells = document.querySelectorAll(".cell");

let board=["","","","","","","","",""];

let currentPlayer="X";
let startingPlayer = "O";
let gameActive = true;


const winConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]

cells.forEach((cell,index)=>
cell.addEventListener("click",()=>handleClick(cell,index)));

function restartGame(){
    board=["","","","","","","","",""];
    currentPlayer=startingPlayer;
    startingPlayer=startingPlayer =="X"?"O":"X"
    cells.forEach(cell =>{
        cell.innerText = "";
        cell.style.backgroundColor = "#f6c1c8";
    })
    gameActive=true;
}

function handleClick(cell,index){
    if(board[index]!==""||!gameActive)return;
    board[index]=currentPlayer;
    if(currentPlayer=="X"){
    cell.style.backgroundColor="#66333a";}
    else{
        cell.style.background="#f81e3b";
    }
    cell.innerText = currentPlayer;
  
    currentPlayer=currentPlayer =="X"?"O":"X";
    for(let condition of winConditions){
        let [a,b,c]=condition;
        if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
            alert(board[a]+" Wins");
            gameActive=false;
            restartGame();
            
        }
        
    }
    if(!board.includes("")){
        alert("It's a Draw");
           
       gameActive = false;
       restartGame();
    }

}

