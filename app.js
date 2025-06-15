let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const userImg = document.querySelector("#userChoiceImg");
const compImg = document.querySelector("#compChoiceImg");

const genCompChoice = () => {
    //the computer will generate the choices randomly, for thiswe have put the choices in array
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];
    /**Math class in JS has a method 'random' generates random value between 0 and 1 (basically value in decimal like 0.9995644565)
       This randomly generated number = random index of the array = randomly generated rock, paper, scissors
       1. Math.random * 3 = to generate the random number from 0 to 2
       2. Math.floor(Math.random() * 3) = to make the number whole like 0,1,2**/
    
}

const displayImage = (userChoice, compChoice) => {
    userImg.src = `./images/${userChoice}.png`;
    compImg.src = `./images/${compChoice}.png`;
}

const drawGame = () => {
     msg.innerText ="Game was draw. Play again."
     msg.style.backgroundColor = "#fb8500";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#283618";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
         msg.innerText =`You lose! ${compChoice} your beats ${userChoice}`;
         msg.style.backgroundColor = "#780000";
         compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    displayImage(userChoice, compChoice);

    if(userChoice === compChoice) {
        drawGame(); //Draw Game
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //then comp choice = scissors/paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper") {
            //then comp choice = scissors/rock
            userWin = compChoice ==="scissors" ? false : true;
        } else {
            //then comp choice = rock/paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => { //user choice is generated
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})