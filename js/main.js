
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player1 ;       //player //
let player2 ;     // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
let start ;      //start the game//
let total = 0; 
let tie ;
let lose ; 


// winning Array by each row and culomns //

let grid = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
]

/*----- cached element references -----*/

const board= document.querySelector('.board') 
const cell= document.querySelectorAll('.cell');
const startEl = document.querySelector('.start');


/*----- event listeners -----*/    
   // writtting function to check if player is true    
function checkPlayerTrun (total){
    if (total % 2 === 0){ 
        return player1 = true;
    }else {        
        return player1 = false;
    }
}
   

board.addEventListener('click', function(e){     //board is indecating all click functions//
    // console.log(e.target.id)

    total = total+1
    let idx=Number(e.target.id)
    let y=idx%7
    let x=Math.floor(idx/7)
     console.log(x,y)
    grid[x][y]='red'
     console.log(grid)
     checkPlayerTrun(total)
    render(idx)

    // add one to total//
    
    // console.log(total)
    // if total is even then player is true 
    // if total is odd then player is false
    // call my fuction that checks if player is true HERE//  
// console.log(player1)        

})


startEl.addEventListener('click',function(){
      
})
 

/*----- functions -----*/

function render(idx){
    console.log(player1, 'inside the render function')
    if(player1){
        return cell[idx].style.backgroundColor='red';
    
    }else{
       return cell[idx].style.backgroundColor='green';

    } 
    // cell[idx].style//
}

// find the winner // 
let winningArray = [
    [ 0, 8, 16, 24,],[ 0, 7, 14, 21,],[ 1, 2, 3, 4,],
    [ 1, 2, 3, 4,],[ 1, 8, 15, 22,],[ 1, 9, 17, 25,],[ 2, 3, 4, 5,],
    [ 2, 10, 18, 26,],[ 2, 9, 16, 23,],[ 3, 4, 5, 6,],[ 3, 11, 19, 27,],
    [ 7, 8, 9, 10,],[ 7, 15, 23, 31,],[ 7, 14, 21, 28,],[ 8, 9, 10, 11,],
    [ 8, 16, 24, 32,],[ 8, 15, 22, 29,],[ 9, 10, 11, 12,],[ 9, 17, 25, 33,],
    [ 9, 16, 23, 30,],[ 10, 11, 12, 13,],[ 10, 18, 26, 34,],[ 10, 17, 24, 31,],
    [ 14, 15, 16, 17,],[ 14, 22, 30, 38,],[ 14, 21, 28, 35,],[ 15, 16, 17, 18,],
    [ 15, 23, 31, 39,],[ 15, 22, 29, 36,],[ 16, 17, 18, 19,],[ 16, 24, 32, 40,],
    [ 16, 23, 30, 37,],[ 17, 18, 19, 20,],[ 17, 25, 33, 41,],[ 17, 24, 31, 38,],
    [ 21, 22, 23, 24,],[ 21, 29, 37, 45,],[ 21, 28, 35, 42,],[ 22, 23, 24, 25,],
    [ 22, 30, 38, 46,],[ 22, 29, 36, 43,],[ 23, 24, 25, 26,],[ 23, 31, 39, 47,],
    [ 24, 25, 26, 27,],[ 24, 32, 40, 48,],[ 24, 31, 38, 45,],[ 28, 29, 30, 31,],
    [ 28, 29, 30, 31,],[ 35, 36, 37, 38,],[ 42, 43, 44, 45,],[ 4, 11, 18, 25,],
    [ 5, 12, 19, 26,],[ 6, 13, 20, 27,],[ 11, 18, 25, 32,],[ 18, 25, 32, 39,],
    [ 25, 32, 39, 46,],[ 12, 19, 26, 33,],[ 19, 26, 33, 40,],[ 26, 33, 40, 47,],
    [ 13, 20, 27, 34,],[ 20, 27, 34, 41,],[ 27, 34, 41, 48,],[ 3, 9, 15, 21,],
    [ 4, 10, 16, 22,],[ 10, 16, 22, 28,],[ 5, 11, 17, 23,],[ 11, 17, 23, 29,],
    [ 17, 23, 29, 35,],[ 6, 12, 18, 24,],[ 12, 18, 24, 30,],[ 18, 24, 30, 36,],
    [ 24, 30, 36, 42,],[ 13, 19, 25, 31,],[ 19, 25, 31, 37,],[ 25, 31, 37, 43,],
    [ 20, 26, 32, 38,],[ 26, 32, 38, 44,],[ 27, 33, 39, 45,]
    ]

    function checkWin(){
        for (let i = 0; i < winCondition.length; i++){
            for (let j = 0; j < 1; j++){
                if (document.getElementById(`${winCondition[i][j]}`).style.backgroundColor != ''){
                    let a = document.getElementById(`${winCondition[i][j]}`).style.backgroundColor
                    let b = document.getElementById(`${winCondition[i][j + 1]}`).style.backgroundColor
                    let c = document.getElementById(`${winCondition[i][j + 2]}`).style.backgroundColor
                    let d = document.getElementById(`${winCondition[i][j + 3]}`).style.backgroundColor
    
                    if (a == b && b == c && c == d){
                        results.innerHTML = 'Player wins'
                    }
                }
            }
        }
    }



    
    