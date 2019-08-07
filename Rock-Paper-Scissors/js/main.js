let playerPick = document.querySelectorAll('button.card');
let resultText = document.querySelector('.verdict-text h3');
let retry = document.getElementById('retry');
let againScreen = document.querySelector('.again');
let player = playerPick.forEach((playerPick) => playerPick.addEventListener('click', playerPlays));
let pl = document.querySelector('.pl'), p = 0;
let pc = document.querySelector('.pc'), c = 0;
let rounds = 0;



retry.addEventListener('click', retryGame);



function playRound(){
    if(rounds != 5){
        let i = computerPlays();
        if((player == 'rock' && i == 'scissor') || (player == 'paper' && i == 'rock') || (player == 'scissor' && i == 'paper')){
            pl.textContent = ++p;
            ++rounds;
            return `${player} beats ${i}. Win!`;
        } else {
            if(player != i){
                ++rounds;
                pc.textContent = ++c;
                return `${i} beats ${player}. Lose!`;
            } else {
                return `it's a draw!`;
            }
        }
    } else {
        againScreen.style.opacity = '1';
        againScreen.style.zIndex = '1';
        alert((p > c) ? "Player wins!" : "Computer wins!");
        return (p > c) ? "Player wins!" : "Computer wins!";
    }

}

function playerPlays(){
    player = this.id;
    console.log();
    resultText.textContent = playRound();
}

function computerPlays(){
    let i = Math.floor(Math.random() * 3);
    return (i == 0) ? 'rock' : (i == 1) ? 'paper' : 'scissor';
}



function retryGame(){
    rounds = 0;
    c = 0;
    p = 0;
    resultText.textContent = '';
    pl.textContent = p;
    pc.textContent = c;
    againScreen.style.opacity = '0';
    againScreen.style.zIndex = '-1';
}