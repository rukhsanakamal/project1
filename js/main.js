
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player ;    // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
let start ;      //rest and start again the game//
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
function checkPlayerTrun (){
    if (total % 2 === 0){ 
        player = true;
    }else {        
        player = false;
    }
}
   player = true

board.addEventListener('click', function(e){           //board is indecating all click functions//
    // console.log(e.target.id)

    let idx=Number(e.target.id)
    let y=idx%7
    let x=Math.floor(idx/7)
    // console.log(x,y)
    grid[x][y]='red'
    // console.log(grid)
    render(idx)

    // add one to total//
    total = total+1
    console.log('this is total',total)
    // if total is even then player is true 
    // if total is odd then player is false
    // call my fuction that checks if player is true HERE//

     checkPlayerTrun()
 

    if (e.target.idx ==='DIV' && player){
        e.target.style.backgroundColor ='red';
    }else if (e.target.idx === 'DIV' && !player){
        e.target.style.backgroundColor ='green';
    }
         

})


startEl.addEventListener('click',function(e){
    // console.log(e.target)
})

/*----- functions -----*/

function render(idx){
    cell[idx].style.backgroundColor='red'
    // cell[idx].style//
}