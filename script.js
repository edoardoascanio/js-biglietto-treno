var numeroChilometri = parseInt (prompt("Scrivi il numero dei chilometri che vuoi percorrere"))
console.log(numeroChilometri + "Km");

var età = parseInt (prompt("Scrivi la tua età"));
console.log(età + "anni");

var prezzoAlChilometro  = (0.21);

var prezzoTotale = (numeroChilometri * prezzoAlChilometro);
console.log("Prezzo Totale" + prezzoTotale + "£");
var prezzo = (Math.random() * 10); 
prezzo.toFixed(2);

if(età < 18){
   var scontoMinorenni = ((prezzoTotale * 20) / 100);
   console.log("Sconto Minorenni" + scontoMinorenni + "£")
}

if(età > 65){
    var scontoOver = ((prezzoTotale * 40) / 100);
    console.log("Sconto Over" + scontoOver + "£")
 }