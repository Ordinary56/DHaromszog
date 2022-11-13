function GenerateBTNs() {
    let position = -((buttonCount-1)/2*200)
    nav.innerHTML = '<button id="selected"></button>'
    document.getElementById("selected").style.transform = 'translate('+(selectedBtn*145)+'%,22.5%)'
    //Gombok legenerálása
    for (let i = 0; i < buttonCount; i++) {
        nav.innerHTML += '<button id="btn'+i+'" class="btn""></button>'
        //Gombok közötti távolság beállítása
        document.getElementById("btn"+i).style.transform = 'translate('+position+'%,50%)'
        position += 200
    }
}
function UpdateImg() {
    document.getElementById("img-before").style.backgroundImage = "url('Kepek/"+selectedFoodType+(selectedFoodID-1)+".jpg')"
    document.getElementById("img").style.backgroundImage = "url('Kepek/"+selectedFoodType+selectedFoodID+".jpg')"
    document.getElementById("img-after").style.backgroundImage = "url('Kepek/"+selectedFoodType+(selectedFoodID+1)+".jpg')"
}