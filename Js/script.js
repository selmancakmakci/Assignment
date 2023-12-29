var USD = 29.50;
var EUR = 32.60;
var CHF = 35;

function rateUSD() {
    document.getElementById("currencyRate").value = USD;
}
function rateEUR() {
    document.getElementById("currencyRate").value = EUR;
}
function rateCHF() {
    document.getElementById("currencyRate").value = CHF;
}



/*document.getElementById("USD").addEventListener("click", function() {
    setAmount(100); 
});

document.getElementById("EUR").addEventListener("click", function() {
    setAmount(150); 
});

document.getElementById("CHF").addEventListener("click", function() {
    setAmount(200); 
});

function setAmount(value) {
    document.getElementById("currencyRate").value = value;
}
*/
/*function result() {
    // girilen degere ulaş
    // girilen değeri guncel kur ile çarp
    // sonucu göster
    
    var currentRate  = document.getElementById("currencyRate").value;
    var enteredAmount = document.getElementById("amount").value;
   
    var result = enteredAmount * currentRate;

    document.getElementById("result").value = result;
    
}*/

function lastResult() {
    var currentRate = document.getElementById("currencyRate").value;
    var enteredAmount = document.getElementById("amount").value;

    
    var result = enteredAmount * currentRate;
    document.getElementById("result").value = result;
    
} 
function clearForm() {
    document.getElementById("myForm").reset();
}