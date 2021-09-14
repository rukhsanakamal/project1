
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player ;    // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
let reset ;      //rest and start again the game//
let total = 0;    

let grid = [
    [0,1,2,3,4,5,6],
    [7,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31,32,33,34,34],
    [35,36,37,38,39,40,42],
]

/*----- cached element references -----*/
const board= document.querySelector('.board')
const cell= document.querySelectorAll('.cell');
const startEl = document.querySelector('reset-button');

console.log(cell)

/*----- event listeners -----*/
board.addEventListener('click', function(e){
    console.log(e.target.id)
})




/*----- functions -----*/