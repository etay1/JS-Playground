function playGuessingGame(answer, totalGuesses = 10) {
    let guesses = 0;
    let previousGuess = null;

    while (guesses < totalGuesses) {
        let message;

        if (guesses === 0) {
            message = "Enter a number between 1 and 100.";
        } else if (previousGuess < answer) {
            message = `${previousGuess} is too small. Guess a larger number.`;
        } else if (previousGuess > answer) {
            message = `${previousGuess} is too large. Guess a smaller number.`;
        }

        var userInput = prompt(message);

        if (userInput === null) {
            return 0;
        }

        var userGuess = parseFloat(userInput);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 ||typeof userGuess != Number) {
            prompt("Please enter a valid number between 1 and 100.");
        } else {
            guesses++;

            if (userGuess < answer) {
                previousGuess = userGuess;
            } else if (userGuess > answer) {
                previousGuess = userGuess;
            } else {
                console.log(`You won! The answer was ${answer}`);
                console.log(`It took ${guesses} guesses to solve!`);
                return guesses;
            }
        }
    }

    console.log("Out of guesses. The answer was " + answer);
    return 0;
}
