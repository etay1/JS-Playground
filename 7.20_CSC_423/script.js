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
        } else if (previousGuess === undefined) {
            message = "Please enter a number.";
        }

        const userInput = prompt(message);

        if (userInput === null) {
            return 0;
        }

        const userGuess = parseFloat(userInput);

        if (isNaN(userGuess)) {
            console.log("Please enter a number.");
            previousGuess = undefined;
        } else {
            guesses++;

            if (userGuess < answer) {
                console.log(`${userGuess} is too small. Guess a larger number.`);
                previousGuess = userGuess;
            } else if (userGuess > answer) {
                console.log(`${userGuess} is too large. Guess a smaller number.`);
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
