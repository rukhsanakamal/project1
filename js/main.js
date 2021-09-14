
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

console.log(cell)

/*----- event listeners -----*/    //board is indecating all click functions//
   // writtting function to check if player is true                                 
board.addEventListener('click', function(e){
    console.log(e.target.id)

    let idx=Number(e.target.id)
    let y=idx%7
    let x=Math.floor(idx/7)
    console.log(x,y)
    grid[x][y]='red'
    console.log(grid)
    render(idx)
    // add one to total//
    // if total is even then player is true 
    // iff total is odd then player is false
    // call my fuction that checks if player is true HERE//
    if (e.target.idx ==='DIV' && player){
        e.target.style.backgroundColor ='red';
        }else if (e.target.idx === 'DIV' && !player){
            e.taget.style.backgroundColor ='green';
        }
         total++

})





startEl.addEventListener('click',function(e){
    console.log(e.target)
})

/*----- functions -----*/

function render(idx){
    cell[idx].style.backgroundColor='red'
    // cell[idx].style//
}