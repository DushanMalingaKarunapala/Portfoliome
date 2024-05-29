let slideindex = 1;
showSlides(slideindex)



function moveSlide(n){
    slideindex +=n
    showSlides(slideindex)
}


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("carousel-item")
    if(n> slides.length){
        slideindex =1
    }
    if (n<1){
        slideindex = slides.length;
    }

    for (let i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideindex -1].style.display = "flex"
}