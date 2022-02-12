// if (1 !== 1) {
//     console.log("it's true")
// }

// Example 2

let rating = 3;

if (rating === 3) {
    console.log("You are a superstar!");
}
else if (rating === 2) {
    console.log("meets expectations");
}
else if (rating === 1 ) {
    console.log('needs improvement');
} else {
    console.log("invalid");
}

// // Example 3
// let num = 37;

// if (num % 2 !== 0) {
//     console.log("odd number!")
// }

// Example
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`congrats, new high score of ${userScore}`)
    highScore = userScore
} else {
    console.log(`Good game. Your score ${userScore} did not beat the high score of ${highScore}`)
}
