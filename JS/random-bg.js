const randomBG = document.getElementById("random-bg");
randomBG.addEventListener("click",function(){
    const randomColor = "#" + Math.floor(Math.random()* 0xFFFFFF).toString(16);
    document.body.style.backgroundColor = randomColor;

})