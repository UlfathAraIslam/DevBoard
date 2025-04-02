const randomBG = document.getElementById("random-bg");
const lightColors = [
    "#FFDFD3", // Light Peach
    "#FFEBB4", // Light Yellow
    "#D4F4DD", // Light Mint
    "#D3E0FF", // Light Blue
    "#FAD2E1", // Light Pink
    "#E3F2FD", // Soft Sky Blue
    "#FBE7C6", // Soft Cream
    "#D9F7BE", // Light Green
    "#F6E6C2", // Soft Beige
    "#FFF5E1"  // Very Light Peach
];
randomBG.addEventListener("click",function(){
    const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
    document.body.style.backgroundColor = randomColor;

})