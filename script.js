const slides = document.querySelector(".slides")
let index = 0

function slide(){
    index++

    slides.style.transition = "transform 0.5s ease"
    slides.style.transform = `translateX(-${index * 100}%)`

    if(index === 3){ // chegou no clone
        setTimeout(() => {
            slides.style.transition = "none"
            slides.style.transform = "translateX(0)"
            index = 0
        }, 500)
    }
}

setInterval(slide, 3000)