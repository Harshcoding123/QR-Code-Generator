let url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let input= document.querySelector("input");
let box2 =document.querySelector("#box2");
let img= document.querySelector("img");
let card= document.querySelector("#card");
function generateQRcode(){
img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
card.style.height="23rem";

}
box2.addEventListener("click",()=>{
    generateQRcode();



})



