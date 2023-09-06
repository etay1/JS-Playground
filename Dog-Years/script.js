function HumanYearstoDogYears(n) {
    var dog_years;
    if (n < 0) {
        throw new Error(alert("The age cannot be negative"));
    } else if (n <= 2) {
        dog_years = n * 10.5;
    } else {
        n = n - 2;
        dog_years = n * 4 + 21;
    }
    return dog_years;
}

function updateOutput() {
    var input = document.getElementById("human_years").value;
    var dog_years = HumanYearstoDogYears(input);
    var output = document.getElementById("dog_years");
    output.innerHTML = `Age in dog years: ${dog_years}`;


}