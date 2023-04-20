const img = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"];
const itemsContainer = document.querySelector(".slider");
let currentImageIndex = 0;
console.log(itemsContainer)
for (let i = 0; i < img.length; i++) {
    const pathImg = img[i];
    console.log(pathImg)
    const image = document.createElement("img");
    image.src=pathImg;
    if (i===0) {
        image.classList.add("show");
    }
    itemsContainer.append(image);
}

const imgArray = document.querySelectorAll(".slider>img");
const btnNext = document.getElementById("next")
btnNext.addEventListener("click", function (){
    if(currentImageIndex+1){
        imgArray[currentImageIndex].classList.add("show")
        
   
    }else{
        imgArray[currentImageIndex].classList.remove("hidden")
    }
    currentImageIndex++;
})
