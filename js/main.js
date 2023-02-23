const buttonSend = document.querySelector("#send");




buttonSend.addEventListener("click",

    function(){
       
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

       

        let newTicketcost;
        let tipoOfferta;

        if (etaMostrata == "minorenne"){
            newTicketcost = baseTicketCost - (baseTicketCost * 20 / 100);
            tipoOfferta = "Biglietto scontato silver";   
        }else if (etaMostrata == "over"){
            newTicketcost = baseTicketCost - (baseTicketCost * 40 / 100);
            tipoOfferta = "Biglietto scontato gold";    
        }
        else{
            newTicketcost = baseTicketCost;
            tipoOfferta = "Biglietto standard";
        }

        newTicketcost = newTicketcost.toFixed(2);

        

        document.getElementById("type_of_ticket").innerHTML = tipoOfferta;
        document.getElementById("cost_ticket").innerHTML = newTicketcost ;
        document.getElementById("name_passenger").innerHTML = nameMostrato ;

        const result_ticket = document.getElementById("result");
        result_ticket.classList.remove("d_none");

        let codiceBiglietto = document.getElementById("codice_cp");
        codiceBiglietto= Math.floor(Math.random() * 100001 + 10000);
        document.getElementById("codice_cp").innerHTML = codiceBiglietto ;

        let numeroDellaCarrozza = document.getElementById("numero_carrozza");
        numeroDellaCarrozza= Math.floor(Math.random() * 10 + 1);
        document.getElementById("numero_carrozza").innerHTML = numeroDellaCarrozza ;


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














