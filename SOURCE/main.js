var buttonCount = 5
var nav = document.getElementById("navigation")
var selectedBtn = 0
var img = document.getElementById("img")
var before = document.getElementById("img-before")
var after = document.getElementById("img-after")
var levesek = []
var foetelek = []
var desszertek = []
var selectedFood, selectedFoodID, selectedFoodType;
var main = document.getElementById("Main")

levesek.push(new Food("Halászlé",1000,"leves1.jpg"))
levesek.push(new Food("Húsleves",800,"leves2.jpg"))
levesek.push(new Food("Gyümölcsleves",1400,"leves3.jpg"))
levesek.push(new Food("Fokhagymaleves",2000,"leves4.jpg"))
levesek.push(new Food("Gulyásleves",1300,"leves5.jpg"))

foetelek.push(new Food("Rántott hús",2000,"foetel1.jpg"))
foetelek.push(new Food("Ránott sajt",2500,"foetel2.jpg"))
foetelek.push(new Food("Cigánypecsenye",1400,"foetel3.jpg"))
foetelek.push(new Food("Hamburger",2000,"foetel4.jpg"))
foetelek.push(new Food("Rakott krumpli",2400,"foetel5.jpg"))

desszertek.push(new Food("Aranygaluska",1500,"desszert1.jpg"))
desszertek.push(new Food("Palacsinta",1000,"desszert2.jpg"))
desszertek.push(new Food("Somlói",1400,"desszert3.jpg"))
desszertek.push(new Food("Kókuszgolyó",500,"desszert4.jpg"))
desszertek.push(new Food("Muffin",750,"desszert5.jpg"))

selectedFood = levesek[2]
selectedFoodID = 3
selectedFoodType = "leves"

GenerateBTNs()
UpdateInfo()
UpdateImg()


SetActive("levesek")