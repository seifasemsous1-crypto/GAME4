function playGame(playerChoice) {
    // Game logic here
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        document.getElementById("t").innerHTML = "It's a tie! You both chose " + playerChoice;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        document.getElementById("t").innerHTML = "You win! " + playerChoice + " beats " + computerChoice;
    } else {
        document.getElementById("t").innerHTML = "You lose! " + computerChoice + " beats " + playerChoice;
    }
}