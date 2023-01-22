var egyik_befogo = document.getElementById("egyik_befogo");
var masik_befogo = document.getElementById("masik_befogo");
var atfogo = document.getElementById("atfogo");

function functions(elem) {
    switch (elem.getAttribute("id")) {
        case "isValid":
            //Szerkeszthető-e egy háromszög belőle?
            const case1 = Math.pow(egyik_befogo.value, 2) + Math.pow(masik_befogo.value, 2) == Math.pow(atfogo.value, 2);
            const case2 = Math.pow(egyik_befogo.value, 2) + Math.pow(atfogo.value, 2) == Math.pow(masik_befogo.value, 2);
            const case3 = Math.pow(atfogo.value, 2) + Math.pow(masik_befogo.value, 2) == Math.pow(egyik_befogo.value, 2)
            if (case1 || case2 || case3) {
                alert("A derékszögű háromszög megszerkeszthető.");
            }
            else {
                alert("A derékszögű háromszög NEM  megszerkeszthető.");
            }

            break;
        case "RandomVal":
            //Lefele kell kerekíteni
            egyik_befogo.value = Math.floor((Math.random() * 91 + 10));
            masik_befogo.value = Math.floor((Math.random() * 91 + 10));
            atfogo.value = Math.floor(Math.sqrt(Math.pow(egyik_befogo.value, 2) + Math.pow(masik_befogo.value, 2)));
            break;
        case "Hypotenuse":
            atfogo.value = Math.floor(Math.sqrt(Math.pow(egyik_befogo.value, 2) + Math.pow(masik_befogo.value, 2)));
            break;
    }
}