// const kiloMetri = parseInt(prompt("Quanti km devi percorrere?"));

// const eta = parseInt(prompt("Quanti anni hai ?"));




const buttonSend = document.querySelector("#send")


buttonSend.addEventListener("click",
    function(){
        const eta = document.querySelector("#age");
        const etaMostrata = eta.value;
        console.log(eta);
        const kiloMetri = document.querySelector("#kilo_Metri");
        const kmMostrati = kiloMetri.value;
        console.log(kiloMetri);
        const fullNameSurName = document.querySelector("#fullname");
        const nameMostrato = fullNameSurName.value;
        console.log(fullNameSurName);
    }




);








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
