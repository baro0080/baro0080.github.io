$(".div, .col-1, .col-2").css("min-height", $(window).height() );

$("#button").click(function(){
    $("#main-nav").slideToggle();
    });




    const _carousel = document.getElementById('carousel1');
    const _carousel2 = document.getElementById('carousel2');

    let currentSlide = 1;

    function buildCarousel() {
        const images = _carousel.querySelectorAll('img'),
              totalImages = images.length;

        let slides = document.createElement('div');
        slides.classList.add('slides');
        slides.style.width = "1920px";

        for (let image of images) {
            let slide = document.createElement('div');
            slide.classList.add('slide');
            slide.style.backgroundImage = "url(" + image.getAttribute('src') + ")"; // image.src

            image.remove();

            slides.appendChild(slide);
        }

        _carousel.appendChild(slides);

    }

    function nextSlide() {
        let slides = document.getElementsByClassName('slide'),
            totalSlides = slides.length;

        currentSlide++;

        for (let i = 0; i < totalSlides; i++) {
            if (currentSlide <= totalSlides) {
                // Move to the next slide
                slides[i].style.transform = "translateX(" + -640 * (currentSlide - 1) + "px)";
            } else {
                //return back to the first slide
                currentSlide = 1;
                slides[i].style.transform = "translateX(0px)";
            }
        }
    }

    buildCarousel();

    setInterval(nextSlide, 2000);
