$(document).ready(function() {
    const owl1 = $('#owl1');
    const dotsContainer = $('.custom-dots');

    // Initialize Owl Carousel
    owl1.owlCarousel({
        rtl:true,
        loop: true,
        margin: 100,
        nav: false,
        items: 1, // Show one item at a time
        dots: false, // Disable default dots
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                
            }
    });

    

    // Get all dot buttons
    const dotButtons = $('.dot-btn');

    // Update the active class on dot buttons
    function updateDots(index) {
        dotButtons.removeClass('active');
        dotButtons.eq(index).addClass('active');
    }

    // Event listener for when the slide changes
    owl1.on('changed.owl.carousel', function(event) {
        const currentIndex = event.item.index % dotButtons.length; // Calculate the current index
        updateDots(currentIndex);
    });

    // Click event for dot buttons
    dotButtons.click(function() {
        const index = $(this).index();
        owl1.trigger('to.owl.carousel', index); // Navigate to the clicked dot's corresponding slide
        updateDots(index); // Update active state
    });

    // Custom Navigation Handlers
    $('.leftSliderHandler').click(() => owl1.trigger('prev.owl.carousel'));
    $('.rightSliderHandler').click(() => owl1.trigger('next.owl.carousel'));
    
    
    const owl2 = $('#owl2');
    // const dotsContainer = $('.custom-dots');
    console.log('fff')
    // Initialize Owl Carousel
    owl2.owlCarousel({
        rtl:true,
        loop: true,
        margin: 17,
        nav: false,
        items: 5, // Show one item at a time
        dots: false, // Disable default dots
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
                576:{
                    items:5,
                    
                },
                0:{
                    items:6,
                    
                }
                
                
            }
    });

    // Custom Navigation Handlers
    $('.amazingBuyLeftHandler').click(() => owl2.trigger('prev.owl.carousel'));
    $('.amazingBuyRightHandler').click(() => owl2.trigger('next.owl.carousel'));
});













