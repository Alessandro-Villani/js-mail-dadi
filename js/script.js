/*-----------------------------------TRACCIA---------------------------------------------

ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

----------------------------------------------------------------------------------------*/

console.log('JS OK');

//! ESERCIZIO 1

//1. Select Target Elements

const targetPlayerNumber = document.getElementById('player-number');
const targetCpuNumber = document.getElementById('cpu-number');
const targetWinner = document.getElementById('winner');

//2. Select Input Button

const inputButton = document.getElementById('roll-dice');

//3. Output variables
let playerNumber = 0;
let cpuNumber = 0;

//3. Add event listener to button

inputButton.addEventListener('click', function(){

    //3.1 Calculate random numbers

    for(let i = 0; i < 2; i++){

        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber);

        if (i === 0){
            playerNumber = randomNumber;
        } else {
            cpuNumber = randomNumber;
        }

    }

    //3.2 Define winner
    
    let result = 'Hai perso!'

    if(playerNumber > cpuNumber){
        result = 'Hai vinto!';
    } else if (playerNumber === cpuNumber){
        result = 'Pareggio!';
    }

    //3.3 Page Outputs

    targetPlayerNumber.innerText = 'Il tuo numero è: ' + playerNumber;
    targetCpuNumber.innerText = 'Il mio numero è: ' + cpuNumber;
    targetWinner.innerText = result

});

