function MoveLeft(){
    if(selectedBtn != -(buttonCount-1)/2){
        selectedBtn = selectedBtn -= 1
        selectedFoodID -=1
        GetSelectedFood()
        document.getElementById("img").style.animation = "center-to-right 2s forwards";
        document.getElementById("img-before").style.animation = "left-to-center 2s forwards";
        GenerateBTNs()
        document.getElementById("arrowRight").disabled = true
        document.getElementById("arrowLeft").disabled = true
        Reset()
    }
    
}
function MoveRight(){
    if(selectedBtn != (buttonCount-1)/2){
        selectedBtn = selectedBtn += 1
        selectedFoodID += 1
        GetSelectedFood()
        document.getElementById("img").style.animation = "center-to-left 2s forwards";
        document.getElementById("img-after").style.animation = "right-to-center 2s forwards";
        GenerateBTNs()
        document.getElementById("arrowRight").disabled = true
        document.getElementById("arrowLeft").disabled = true
        Reset()
    }
}

function GetSelectedFood() {
    switch (selectedFoodType) {
        case "leves":
            selectedFood = levesek[selectedFoodID-1]
            break;
        case "foetel":
            selectedFood = foetelek[selectedFoodID-1]
            break;
        case "desszert":
            selectedFood = desszertek[selectedFoodID-1]
            break;
    }
}

function UpdateInfo() {
    document.getElementById("info").innerHTML = "<h1>"+selectedFood.name+"</h1><button id='info-button' onclick='Select()'>"+selectedFood.price+"ft</button>"
    if (selectedFood.selected == false) {
        document.getElementById("info-button").style.backgroundColor = "rgba(0,0,0,0)";
    }else if (selectedFood.selected == true) {
        document.getElementById("info-button").style.backgroundColor= "rgba(0,180,0,0.75)";

    } 
}

function Select() {
    if (selectedFood.selected == false) {
        selectedFood.selected = true
        document.getElementById("info-button").style.animation = "tp-to-green 1s forwards";
        document.getElementById("info-button").style.backgroundColor = "rgba(0,0,0,0)";
    }else if (selectedFood.selected == true) {
        selectedFood.selected = false
        document.getElementById("info-button").style.animation = "green-to-tp 1s forwards";
        document.getElementById("info-button").style.backgroundColor= "rgba(0,180,0,0.75)";
    }
}

function RevealInfo() {
    document.getElementById("info").style.animation = "animateInfo 2s forwards";
    document.getElementById("info").style.display = "block";
}

function Reset() {
    setTimeout(function(){
        document.getElementById("img-before").style.animation = "none";
        document.getElementById("img").style.animation = "none";
        document.getElementById("img-after").style.animation = "none";
        document.getElementById("info").style.animation = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("info-button").style.animation = "none";
        document.getElementById("arrowRight").disabled = false
        document.getElementById("arrowLeft").disabled = false
        if (selectedFood.selected == false) {
            document.getElementById("info-button").style.backgroundColor = "rgba(0,0,0,0)";
        }else if (selectedFood.selected == true) {
            document.getElementById("info-button").style.backgroundColor= "rgba(0,180,0,0.75)";
        }
        UpdateInfo()
        UpdateImg()
    }, 2000);
}