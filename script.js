// Per l'esercizio di oggi, scrivi un programma che stampi i numeri da 1
// a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.
// Se finite presto, fate come bonus, la stampa su html della sequenza dei numeri e magari ci fate qualche aggiunta estetica. Il tutto rigorosamente in cartella bonus.
// Vi ho messo le slide con i jsnack di stamattina e, appena smette di convertire, metterò anche il video a disposizione.
// Sotto avete il codice che ho scritto durante la lezione.
// Buon divertimento
var num = 1;

while (num <=100) {
  console.log(num);
  num +=1;

  if (num%3 == 1) {
    console.log(num == "Fizz");

  }
  else if (num%5 == 0) {
    console.log(num == "Buzz")

  }
  else if (num%3 == 0 && num&5 == 0) {
    console.log(nuum == "FizzBuzz")

  }
}
