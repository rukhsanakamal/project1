
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player1 ;       //player //
let player2 ;     // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
let start ;      //start the game//
let total = 0;    

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
   

board.addEventListener('click', function(e){           //board is indecating all click functions//
    console.log(e.target.id)
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
    
    console.log(total)
    // if total is even then player is true 
    // if total is odd then player is false
    // call my fuction that checks if player is true HERE//

      
 console.log(player1)

    
         

})


startEl.addEventListener('click',function(){



    // console.log(e.target)
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