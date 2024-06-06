const riga = document.querySelector(".row");

// Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    // creo una colonna con all'interno un div che rappresenti i numeri
    let box =  `<div class="box bg-blue">
                    <div>${i}</div>
                </div>`; 

    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  
    if (i % 3 === 0 && i % 5 === 0) {
        box = `<div class="box bg-red">
                    <div>FizzBuzz</div>
                 </div>`; 
        
    } 
    
    else if (i % 3 === 0) {
        box = `<div class="box bg-green">
                    <div>Fizz</div>
                 </div>`;   
    }  
    // per i multipli di 5 stampi “Buzz” al posto del numero 
    else if (i % 5 === 0) {
        box = `<div class="box bg-yellow">
                    <div>Buzz</div>
                 </div>`; 
    } else {}

    console.log(box);

    riga.innerHTML += box;
    
    

      
}









