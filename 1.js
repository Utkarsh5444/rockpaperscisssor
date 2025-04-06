let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#reset-btn"); // Add a button with id="reset-btn"

// Animate score when it changes
const animateScore = (element) => {
    element.classList.add("animate-score");
    setTimeout(() => {
        element.classList.remove("animate-score");
    }, 400);
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "🤝 It's a draw! Play again.";
    msg.className = "draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        animateScore(userScorePara);
        msg.innerText = `✅ You win! Your ${userChoice} beats ${compChoice}`;
        msg.className = "win";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        animateScore(compScorePara);
        msg.innerText = `❌ You lose! ${compChoice} beats your ${userChoice}`;
        msg.className = "lose";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Make your move!";
    msg.className = "";
});
