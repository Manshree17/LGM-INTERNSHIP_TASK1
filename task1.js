window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length; i++){
        var windowheight =window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(revealtop<windowheight -revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;


function reset() {
for (let i = 0; i < sliderImages.length; i++) {
sliderImages[i].style.display = "none";
}
}


function startSlide() {
reset();
sliderImages[0].style.display = "block";
}


function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}


function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

arrowLeft.addEventListener("click", function () {
if (current === 0) {
current = sliderImages.length;
}
slideLeft();
});

arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
current = -1;
}
slideRight();
});

startSlide();
