
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player1 ;       //player //
let player2 ;     // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
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

     checkWin()

     checkPlayerTrun(total)
    render(idx)

    // add one to total//
    
    // console.log(total)
    // if total is even then player is true 
    // if total is odd then player is false
    // call my fuction that checks if player is true HERE//  
// console.log(player1)        

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
let winCondition = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],

    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],

    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]
console.log(winCondition.length)
    function checkWin(){
        for (let i = 0; i < winCondition.length; i++){
            for (let j = 0; j < 1; j++){
                console.log(i,j)
                if (document.getElementById(`${winCondition[i][j]}`).style.backgroundColor != ''){
                    let a = document.getElementById(`${winCondition[i][j]}`).style.backgroundColor
                    let b = document.getElementById(`${winCondition[i][j + 1]}`).style.backgroundColor
                    let c = document.getElementById(`${winCondition[i][j + 2]}`).style.backgroundColor
                    let d = document.getElementById(`${winCondition[i][j + 3]}`).style.backgroundColor
    
                    if (a == b && b == c && c == d){
                        console.log("winner")
                        results.innerHTML = 'Player wins'
                    }
                }
            }
        }
    }



    
    