$(function() {

    let header = $('#header')
    let intro = $('#intro')
    let nav = $('.nav')

    let introH = intro.innerHeight()
    let scrollPos = $(window).scrollTop()

    checkScroll(scrollPos,introH)

    $(window).on('scroll resize ', () => {
        introH = intro.innerHeight()
        scrollPos = $(this).scrollTop()
        checkScroll(scrollPos,introH)
    })

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH){
            header.addClass('fixed')
        } else{
            header.removeClass('fixed')
        }
    }

    // SLIDER

    let slider = $('#whoSlider')

    slider.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        dots: true,

    });

    $(document).ready(function(){
        $(window).on('load resize', sliderSlick);
    });

    function sliderSlick() {
        let width = document.documentElement.clientWidth
        if (width < 695) {
            slider.filter('.slick-initialized').slick('unslick');
        } else {
                slider.not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    arrows: false,
                    dots: true,

                });
        }
    }




    //     Smooth scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault()

        let elementID = $(this).data('scroll')
        let elementOffset = $(elementID).offset().top

        nav.removeClass('active')
        $('.ham').removeClass('active')


        if (elementID === '#features')
            $('html, body').animate({
                scrollTop: elementOffset + 65,
            }, 700)
        else {
            $('html, body').animate({
                scrollTop: elementOffset - 75,
            }, 700)
        }
    })


//    Modal

    const close = $('.js-close-popup')
    const modalOverlay = $('.overlay')
    const popup = $('.js-popup')


    function closeModal(close,object) {
        close.click(function (){
            object.removeClass('active')
        })
    }


    function closeModalOverlay(popup,object){
        $(document).mousedown(function (e) {
            if (e.target !== popup[0] && popup.has(e.target).length === 0) {
               object.removeClass('active')
            }
        })
    }

    $('.js-button-popup').click(function (){
        modalOverlay.addClass('active')
    })

    closeModal(close,modalOverlay)

    closeModalOverlay(popup,modalOverlay)


    //    Modal PLAY

    const modalPlayOverlay = $('.overlay-play')
    const popupPlay = $('.js-popup-play')



    $('.js-button-popup-play').click(function (){
        modalPlayOverlay.addClass('active')
    })

    closeModal(close,modalPlayOverlay)

    closeModalOverlay(popupPlay,modalPlayOverlay)



//    BURGER


    const burger = $('.burger')

    burger.on('click', function () {
        nav.toggleClass('active')
        $('.body').toggleClass('scroll-hidden')

        })



})
