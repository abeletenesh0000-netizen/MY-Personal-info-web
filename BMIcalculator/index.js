function bmi(weight, height) {
    var result = weight / (height * height);
    return result;
}

function calculateBMI() {

    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);

    var result = bmi(weight, height);

    document.getElementById("result").innerText =
        "Your BMI is: " + result.toFixed(2);

    if (result < 18.5) {
        document.getElementById("result").innerText += " (Underweight)";
    } 
    else if (result < 25) {
        document.getElementById("result").innerText += " (Normal weight)";
    } 
    else if (result < 30) {
        document.getElementById("result").innerText += " (Overweight)";
    }
    else {
        document.getElementById("result").innerText += " (Obesity)";
    }
}