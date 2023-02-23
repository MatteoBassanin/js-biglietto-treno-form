// const kiloMetri = parseInt(prompt("Quanti km devi percorrere?"));

// const eta = parseInt(prompt("Quanti anni hai ?"));




const buttonSend = document.querySelector("#send");
let kmMostrati;
let etaMostrata;
let nameMostrato;

buttonSend.addEventListener("click",

    function(){
        const eta = document.getElementById("age");
        const etaMostrata = eta.value;
        console.log(etaMostrata);
        const kiloMetri = document.getElementById("kilo_Metri");
        const kmMostrati = kiloMetri.value;
        console.log(kmMostrati);
        const fullNameSurName = document.getElementById("fullname");
        const nameMostrato = fullNameSurName.value;
        console.log(nameMostrato);
    }


);




let baseTicketCost = kmMostrati * 0.21;

console.log(baseTicketCost);

let newTicketcost;


if (etaMostrata <= 18){
    newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);   
}else if (etaMostrata >= 65){
    newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);   
}
else{
    newTicketcost = baseTicketCost;
}

newTicketcost = newTicketcost.toFixed(2);


// console.log(newTicketcost);





// let baseTicketCost = kiloMetri * 0.21;

// console.log(baseTicketCost);

// let newTicketcost;


// if (eta <= 18){
//     newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);   
// }else if (eta >= 65){
//     newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);   
// }
// else{
//     newTicketcost = baseTicketCost;
// }

// newTicketcost = newTicketcost.toFixed(2);

// document.getElementById("cost_ticket").innerHTML = "Il costo del tuo biglietto è di " + newTicketcost ;


