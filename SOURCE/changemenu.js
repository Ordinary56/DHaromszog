
function ChangeType(type) {
    if(type != selectedFoodType){
        selectedFoodType = type
        selectedFoodID = 3
        GetSelectedFood()
        selectedBtn = 0
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
        GenerateBTNs()
        AnimateChange()
        UpdateInfo()
    }
}

function AnimateChange() {
    document.getElementById("img").style.animation = "fadeout 2s forwards"
    document.getElementById("arrowRight").disabled = true
    document.getElementById("arrowLeft").disabled = true
    document.getElementById("levesek").disabled = true
    document.getElementById("foetelek").disabled = true
    document.getElementById("desszertek").disabled = true
    setTimeout(function(){
        UpdateImg()
        document.getElementById("img").style.animation = "fadein 2s forwards"
        Reset()
        document.getElementById("levesek").disabled = false
        document.getElementById("foetelek").disabled = false
        document.getElementById("desszertek").disabled = false
    }, 1000);
}
function SetActive(name) {
    document.getElementById("levesek").style.backgroundColor = "rgba(90, 65, 15, 0.5)"
    document.getElementById("foetelek").style.backgroundColor = "rgba(90, 65, 15, 0.5)"
    document.getElementById("desszertek").style.backgroundColor = "rgba(90, 65, 15, 0.5)"
    document.getElementById(name).style.backgroundColor = "rgba(90, 65, 15, 0.9)"
}