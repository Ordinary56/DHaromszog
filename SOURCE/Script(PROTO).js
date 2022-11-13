var buttonCount = 5
var nav = document.getElementById("navigation")
var selectedBtn = 0
var pictures = ["food1.jpg","food2.jpg","food3.jpg","food2.jpg","food1.jpg"]
var main = document.getElementById("Main")
var bgPos = 2 
function GenerateBTNs() {
    let position = -((buttonCount-1)/2*200)
    nav.innerHTML = '<button id="selected"></button>'
    document.getElementById("selected").style.transform = 'translate('+(selectedBtn*145-2)+'%,22.5%)'
    //Gombok legenerálása
    for (let i = 0; i < buttonCount; i++) {
        nav.innerHTML += '<button id="btn'+i+'" class="btn""></button>'
        //Gombok közötti távolság beállítása
        document.getElementById("btn"+i).style.transform = 'translate('+position+'%,50%)'
        position += 200
    }
}
function UpdateImg() {
    main.style.backgroundImage = 'url("Étterem/Desszertek/'+pictures[bgPos]+'")'
}
function MoveRight(){
    if(selectedBtn != (buttonCount-1)/2){
        selectedBtn = selectedBtn += 1
        bgPos+=1
        GenerateBTNs()
        UpdateImg()
    }
    
}
function MoveLeft(){
    if(selectedBtn != -(buttonCount-1)/2){
        selectedBtn = selectedBtn -= 1
        GenerateBTNs()
        bgPos-=1
        UpdateImg()
    }
}
GenerateBTNs()
UpdateImg()