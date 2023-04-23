// croo array delle immagini
const imgArray = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"]
//riprendo il contenitore delle slide dal DOM
const cont = document.getElementById("slider");
//ciclo per creare dei div contenenti l'array all'interno del contenitore
for (let c = 0; c < imgArray.length; c++) {
    //creo i div con createlement che conterranno le immagini
    const slide = document.createElement("div");
    //creo immagini nel DOM
    const img = document.createElement("img");
    // set attribute permette di inserire l'attributo src nelle immagine per l'url da inserirci
    img.setAttribute('src', imgArray[c]);
    //faccio un append per inserire le immagini dentro slide
    slide.append(img);
    //console log per vedere se e' tutto ok
    // console.log(slide);
    //aggiungo la class css slide alle slide
    slide.classList.add("slide");
    //inserisco i div contenenti le immagini nello slider
    cont.append(slide);
}
// console.log(cont)
//creo costante da utilizzare per usare 
const slides = document.querySelectorAll("div > img");
console.log(slides)
//faccio loop per inserire z index e translateX alle immagini
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
})
//contatore delle slide
let currentSlide = 0;
//puslante next slide
const next = document.querySelector(".next");
const buttone = document.getElementById("next");
buttone.style.zIndex = "10";
// pulsante previous
const buttone2 = document.getElementById("previous")
buttone2.style.zIndex = "10";
let maxSlide = slides.length -1;
console.log(maxSlide);
next.addEventListener("click", function(){

    slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
 if (currentSlide === maxSlide){
    currentSlide = 0;
 } else{
    currentSlide++;
 }
});
//seleziono il pulsante previous
const prevSlide = document.querySelector(".previous");

// funzione per pulsante back 
prevSlide.addEventListener("click", function () {
  // controllo che currentslide sia prima senno' passo all'ultima
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});
