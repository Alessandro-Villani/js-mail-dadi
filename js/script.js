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



//! ESERCIZIO 2

//1. Add Email Array

const emailDatabase = ['mariorossi@gmail.com', 'luigiverdi@gmail.com', 'antoniobianchi@gmail.com', 'pippobaudo@libero.it'];

//2. Add Input Element

const inputEmail = document.getElementById('email');
const inputLoginButton = document.getElementById('login-button');

//3. Add Output Element
    
const targetLoginMessage = document.getElementById('login-message');

//4. Set flag for email
let isPresent = false;

//4. Add event listener to button

inputLoginButton.addEventListener('click', function(){

    //4.1 Reset flag
    isPresent = false;

    //4.2 Take input value
    const email = inputEmail.value;
    console.log(email);

    //4.3 Set login message error
    let loginMessage = '<p class="bg-danger p-2"><i class="fa-solid fa-triangle-exclamation me-2"></i>Email non presente</p>';

    //4.4 For every element in the array...
    for(let i = 0; i < emailDatabase.length; i++){
        console.log('i= ' + i);
        //4.4.1 if flag is false
            if (!isPresent){
            //4.4.2 Check if email is equal to Array Index's content
                if(email === emailDatabase[i]){
                    //4.4.2.1 Set flag true
                    isPresent = true;
                    //4.4.1.2 Set login message successfull
                    loginMessage = '<p class="bg-success p-2"><i class="fa-regular fa-circle-check me-2"></i>Accesso effettuato</p>';
                    ////console.log('loginMessage= ' + loginMessage);
                }
            }
    }

    targetLoginMessage.innerHTML = loginMessage



});



