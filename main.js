alert("assumi abbastanza Omega3? Scoprilo con questo test!")
alert("le regole sono semplici: Verranno mostrati a schermo 5 numeri. Dopo 30 secondi ti verrà chiesto di inserire i numeri mostrati precedentemente.")

const numShowed = [];
const numTested = [];
let numString = " "; 
/*  ciclo per l'aggiunta dell'elemento nell'array da comparare e attivazione alert */

for (let index = 0; index < 5; index++) {
  const numCor = Math.floor(Math.random() * 10)

  /* controllo nell'eventualità generasse un numero uguale a uno dei precedenti */

    if(!numShowed.includes(numCor)){
        numShowed.push(numCor)
        alert(numShowed[index])
    }

    /* se trova un numero uguale diminuisce l'index in modo tale da avere sempre 5 mumeri */
    
    else{
        index--;
    }
}

setTimeout(function() {
    memTester(numShowed);
}, 1000);

/* funzione che controlla i numeri inseriti */
function memTester(numS){
    for (let index = 0; index < 5; index++) {
         const toCheck = parseInt(prompt(`insersci il ${index + 1}° numero `));

         /* controllo per inserire i numeri ed evitare che il controllo non sia 1/1 */

        if(numS.includes(toCheck) && !numTested.includes(toCheck)){

            /* Aggiunta della stringa per facilitare la visualizzazione a schermo */

            if(!numTested.length == 0){
                numString += `,${toCheck}`;
            }
            else{
                numString += `${toCheck}`;
            }     
            numTested.push(toCheck);
        } 
    }
    alert(`Hai indovinato ${numTested.length} numero/i:${numString}`)

}