function roll()
{
    var input = document.getElementById("dice-input").value;
    if(isNaN(input) || input < 1 || input > 100 || input % 1 !== 0) {
        document.getElementById("roll-result").innerHTML = "Invalid input. Please enter an integer between 1 and 100.";
    }
    else {
        var rand = Math.random() * input + 0.5;
        document.getElementById("roll-result").innerHTML = "d" + input + " Result: " + Math.round(rand);
    }
}