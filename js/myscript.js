const riga = document.querySelector(".row");

// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    // creo variabile per contenuto
    let txtBox = i;

    // creo variabile per background
    let bgClass;
    
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  
    if (i % 3 === 0 && i % 5 === 0) {
        txtBox = "FizzBuzz";
        bgClass = "bg-red";
    } 
     // per i multipli di 3 stampi “Fizz” al posto del numero 
    else if (i % 3 === 0) {
        txtBox = "Fizz";
        bgClass = "bg-green";  
    }  
    // per i multipli di 5 stampi “Buzz” al posto del numero 
    else if (i % 5 === 0) {
        txtBox = "Buzz";
        bgClass = "bg-yellow";
    } else {
        bgClass = "bg-blue";
    }

    // creo una colonna con all'interno un div che rappresenti i numeri
    let box =  `<div class="card ${bgClass}">
                    <div>${txtBox}</div>
                </div>`; 

    console.log(box);

    riga.innerHTML += box;
    
    

      
}









