
//*----- constants -----*//



/*----- app's state (variables) -----*/

let player ;    // player turn tracking//
let color ;     // player coloers by swtiching //
let winner;     //  winnwer player tracking //
let reset ;      //rest and start again the game//
let total = 0;    

let grid = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

/*----- cached element references -----*/

const grid = document.querySelectorAll('cell');
const startEl = document.querySelector('reset-button');




/*----- event listeners -----*/





/*----- functions -----*/