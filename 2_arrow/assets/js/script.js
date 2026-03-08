function pintar()   {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1") 
ele.addEventListener("click", pintar);

ele.addEventListener("click", function(){
    ele.style.backgroundColor = 'yellow'
})

function pintar()   {
    ele.style.backgroundColor = 'green'
}
pintar("click", function()  {
    ele.style.backgroundColor = 'yellow'
})




