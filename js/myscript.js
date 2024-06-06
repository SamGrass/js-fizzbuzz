const riga = document.querySelector(".row");

// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    // creo una colonna con all'interno un div che rappresenti i numeri
    let box = `<div class="box">
                    <div>${i}</div>
                 </div>`;
    console.log(box);

    riga.innerHTML += box;
    // per i multipli di 3 stampi “Fizz” al posto del numero
    

    // per i multipli di 5 stampi “Buzz” al posto del numero 

    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


    
}









