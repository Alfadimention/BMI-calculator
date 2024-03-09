function calculate_bmi() {
    var w = parseFloat(document.getElementById("weight_x").value);
    var h = parseFloat(document.getElementById("height_x").value) / 100;
    var bmi = w/(h*h)
    document.getElementById("result").textContent = "your BMI: " + bmi.toFixed(2) + "Kg/M²"
}