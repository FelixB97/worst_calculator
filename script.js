start();

function start() {
    console.log("welcome start loading");
    let firstField;
    let secondField;
    let calculationType;
    let result;
    let decimalAmount;
    document.querySelector("#calculate").addEventListener("click", calculator);
    document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
    let myList = document.getElementById('results');
myList.innerHTML = '';
}

function fieldReader() {
    console.log("fields read");
    firstField = parseInt(document.getElementById("firstnumber").value);
    secondField = parseInt(document.getElementById("secondnumber").value);
    calculationType = document.getElementById("operator").value;
    decimalAmount = parseInt(document.getElementById("decimals").value);
    
}

function calculator() {
fieldReader();
console.log("calculating");

if (calculationType == "add") {
    console.log("adding numbers");
    console.log(firstField + " + " + secondField);
    result = (firstField) + (secondField);
    displayResult();
    
}

if (calculationType == "sub") {
    console.log("subtrackting numbers");
    console.log(firstField + " - " + secondField);
    result = (firstField) - (secondField);
    displayResult();
}

if (calculationType == "mul") {
    console.log("multiplying numbers");
    console.log(firstField + " * " + secondField);
    result = (firstField) * (secondField);
    displayResult();
}

if (calculationType == "div") {
    console.log("dividing numbers");
    console.log(firstField + " / " + secondField);
    result = (firstField) / (secondField);
    displayResult();
}

}

function displayResult() {
    console.log("unaltered result: " + result);





    if (document.getElementById("doround").checked == true) {
        console.log("decimal checked");
        let test = result
        let n = test.toFixed(decimalAmount);
        result = n;
        console.log("Rounded result: " + n);


    }

    if (document.getElementById("doround").checked == false) {
        console.log("decimal unchecked");
        
    }

    
    document.querySelector("#firstnumber").value = result;
    
    let node = document.createElement("LI");
    let textnode = document.createTextNode(result);
    node.appendChild(textnode);
    document.getElementById("results").appendChild(node);
      updateScroll();
    

    
}

function updateScroll(){
    let element = document.getElementById("results");
    element.scrollTop = element.scrollHeight;
}
