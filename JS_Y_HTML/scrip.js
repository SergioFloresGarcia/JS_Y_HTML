var Dato = new Date();
var enddato = new Date();
var days =24;
            Dato.setDate(Dato.getDate() - (Dato.getDay() + 2)%7);
           enddato.setDate(Dato.getDate() + days);
            enddato.getTime();
            countDiv = document.getElementById("Dato");
            var x = setInterval(function(){
                var now = new Date().getTime();
                var daterest = enddato - now;
                var days = Math.floor(daterest / (1000 * 60 * 60 * 24));
    
                countDiv.innerHTML = "falan 23 dias";
            });