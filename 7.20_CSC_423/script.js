function playGuessingGame(answer, totalGuesses = 10) {
    let guesses = 0;
    let previousGuess = null;
    let validGuessMade = false;

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

        if (isNaN(userGuess)) {
            alert("Please enter a number.");
        } else if (userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            guesses++;
            validGuessMade = true;

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

    if (!validGuessMade) {
        console.log("No valid guesses were made.");
    } else {
        console.log("Out of guesses. The answer was " + answer);
    }
    return 0;
}
