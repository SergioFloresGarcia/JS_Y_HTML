var Dato = new Date();
var enddato = new Date();
var days =24;
            Dato.setDate(Dato.getDate() - (Dato.getDay() + 2)%7);
           enddato.setDate(Dato.getDate() + days);
            enddato.getTime();
            countDiv = document.getElementById("Dato");
