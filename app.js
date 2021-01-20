let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "rock") return "Rock";
    if(letter === "paper") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} beats ${convertToWord(computerChoice)}${compWord}. You Win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 200);
}

function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(computerChoice)}${compWord} beats ${convertToWord(userChoice)}${userWord} Computer Win! 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 200);
}

function draw(userChoice, computerChoice){
    const userWord = "user".fontsize(3).sub();
    const compWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} equals ${convertToWord(computerChoice)}${compWord}. It's a Draw.. 😉`;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 200);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main(){
    rock_div.addEventListener('click', () => game("rock"));
    
    paper_div.addEventListener('click', () => game("paper"));
    
    scissor_div.addEventListener('click', () => game("scissor"));
}

main();

