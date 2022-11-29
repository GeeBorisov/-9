/* slider */
const owl = $(".gallery__slider");
    owl.owlCarousel({
        // center: true,
        margin: 10,
        items: 1,
        loop: true,
        responsive : {
            540: {
                items: 2,
                margin: 10,
            },
            900: {
                items: 3,
                margin: 10,

            },
            1340: {
                items: 4,
                margin: 10,
            }
        }
    });


  $('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


/* slider 2 */
const owl2 = $(".gallery__slider2");
owl2.owlCarousel({
    items: 1,
    loop: true,
    responsive : {
        540: {
            items: 2,
            margin: 10,
        },
        900: {
            items: 3,
            margin: 10,

        },
    }
    
});


$('.slider__btn--prev2').click(function() {
owl2.trigger('prev.owl.carousel');
})

$('.slider__btn--next2').click(function() {
owl2.trigger('next.owl.carousel');
})

/* Trainers-slider */
const owl3 = $(".trainers__slider");
owl3.owlCarousel({
    // center: true,
    items: 3,
    loop: true,
    margin: 10,
    responsive:{
        600:{
            items:2,
            margin: 10,
        },
        1280: {
            item: 1,
        },
    }
});


$('.slider__btn--prev3').click(function() {
owl3.trigger('prev.owl.carousel');
})

$('.slider__btn--next3').click(function() {
owl3.trigger('next.owl.carousel');
})

