let containerEl = document.getElementById("container");
let sliderEl = document.getElementById("slider");
let imgArray = new Array();
let slideEl = document.getElementsByClassName("slide");
imgArray[0] = new Image();
imgArray[0].src = './img/01.webp';

imgArray[1] = new Image();
imgArray[1].src = './img/02.webp';

imgArray[2] = new Image();
imgArray[2].src = './img/03.webp';

imgArray[3] = new Image();
imgArray[3].src = './img/04.webp';

imgArray[4] = new Image();
imgArray[4].src = './img/05.webp';
let currentSlide = 0;
let btnNext = document.getElementById("next");

btnNext.addEventListener("click", function () {

    if (currentSlide < 4) {
        for (let c = 0; c < imgArray.length; c++) {
            let slide = slideEl[c];

            if (c == currentSlide + 1) {
                sliderEl.innerHTML +=   `
                <div class="slide ${c == 0 ? 'hidden':'show'}">
                    <img src="${imgArray[c]}" alt="">
                </div>` 
            }
        }
        currentSlide++;
    }
})