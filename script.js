var playBtn = document.querySelector("button")
var screen = document.querySelectorAll(".screen")
var allElems = document.querySelectorAll(".elem")
var play = document.querySelector("#play")


var selected = ""

playBtn.addEventListener("click", function(){
    screen[1].style.transform = "translateY(-100%)"
})


allElems.forEach(function(dets){

    dets.addEventListener("click", function(val){
        screen[2].style.transform = "translateY(-200%)"
    selected = dets.childNodes[3].getAttribute("src")
    // console.log(selected)

    var newImg = document.createElement("img")
    play.appendChild(newImg)
    newImg.setAttribute("src", selected)
    var width = Math.random()*100
    var height = Math.random()*100
    var rot = Math.random()*360
    newImg.style.left = width+"%"
    newImg.style.top = height+"%"
    newImg.style.rotate = rot+"deg"




    })
})

document.querySelector("#play").addEventListener('click', function(dets){
    console.log(dets.target.getAttribute("src"))

})