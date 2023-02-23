// const kiloMetri = parseInt(prompt("Quanti km devi percorrere?"));

// const eta = parseInt(prompt("Quanti anni hai ?"));




const buttonSend = document.querySelector("#send");




buttonSend.addEventListener("click",

    function(){
        // const eta = document.getElementById("age");
        // const etaMostrata = parseInt(eta.value);
        // console.log(etaMostrata);
        const kiloMetri = document.getElementById("kilo_Metri");
        const kmMostrati = parseInt(kiloMetri.value);
        console.log(kmMostrati);
        const fullNameSurName = document.getElementById("fullname");
        const nameMostrato = fullNameSurName.value;
        console.log(nameMostrato);
        const eta = document.getElementById("age");
        const etaMostrata = eta.value;
        console.log(etaMostrata)

        let baseTicketCost = kmMostrati * 0.21;

        // alert(baseTicketCost);

        let newTicketcost;


        if (etaMostrata == "minorenne"){
            newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);   
        }else if (etaMostrata == "over"){
            newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);   
        }
        else{
            newTicketcost = baseTicketCost;
        }

        newTicketcost = newTicketcost.toFixed(2);

        

        // alert(newTicketcost);
        document.getElementById("cost_ticket").innerHTML = "Il costo del tuo biglietto è di " + newTicketcost ;

    }


);


const buttoncancel = document.querySelector("#cancel");
buttoncancel.addEventListener("click",

    function() {
        const kiloMetri = document.getElementById("kilo_Metri");
        kiloMetri.value = "";
        const fullNameSurName = document.getElementById("fullname");
        fullNameSurName.value = "";
        
        const eta = document.getElementById("age");
        eta.value = "minorenne";
        
    }
);













// let baseTicketCost = kmMostrati * 0.21;

// alert(baseTicketCost);

// let newTicketcost;


// if (etaMostrata <= 18){
//     newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);   
// }else if (etaMostrata >= 65){
//     newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);   
// }
// else{
//     newTicketcost = baseTicketCost;
// }

// newTicketcost = newTicketcost.toFixed(2);


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


