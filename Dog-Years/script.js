function HumanYearstoDogYears(n) {
    //Here’s how you convert your age from “human years” to “dog years”:
    // The first two years of a dog’s life count as 10.5 dog years each.
    // Each year following equates to 4 dog years.
    var dog_years;
    if (n < 0) {
        throw new Error ("The age cannot be negative");
    }
    else if (n <= 2)
            dog_years= n * 10.5;
    else {
        n = n - 2;
        dog_years = n * 4 + 21;
    }

}

function updateOutput() {
    var input = document.getElementById("human_years").value;
    var dog_years = HumanYearstoDogYears(input);
    var output = document.getElementById("dog_years");
    output.innerHTML = "Age in dog years: " + dog_years;


}