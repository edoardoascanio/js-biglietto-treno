var numeroChilometri = parseInt (prompt("Scrivi il numero dei chilometri che vuoi percorrere"))
console.log(numeroChilometri + "Km");

var eta = parseInt (prompt("Scrivi la tua età"));
console.log(eta + "anni");

var prezzoAlChilometro  = (0.21);

var prezzoTotale = (numeroChilometri * prezzoAlChilometro);
console.log("Prezzo Totale" + prezzoTotale + "£");
var prezzo = (Math.random() * 10); 
prezzo.toFixed(2)

if(Number.isNaN (numeroChilometri) || Number.isNaN (eta)){
    alert("Inserire cifre numeriche")
}

if(eta < 18){
    var scontoMinorenni = ((prezzoTotale * 20) / 100);
    console.log("Sconto Minorenni" + scontoMinorenni + "£")
    document.getElementById("sconto-18").innerHTML = "Sconto Minorenni" + 
    ('<em>' + scontoMinorenni + '</em>') + "£"
}

if(eta > 65){
    var scontoOver = ((prezzoTotale * 40) / 100);
    console.log("Sconto Over" + scontoOver + "£")
    document.getElementById("sconto-over").innerHTML = "Sconto Over" + ('<em>' + scontoOver + '</em>') + "£"
 }

 if(eta > 145){
    alert("Inserire età valida")
    console.log("Inserire età valida")
 }

 document.getElementById("totale").innerHTML = "Prezzo del Biglietto" + 
 ('<em>' + prezzoTotale + '</em>') + "£"
