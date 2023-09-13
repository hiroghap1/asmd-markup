const swiper = new Swiper('#swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 6000,
    }

});

gsap.to('.section-company',{backgroundColor: '#fff',
    scrollTrigger:{
        trigger:'.section-company',
        start:'top 40%',
        end:'bottom 20%',
        toggleActions:'play none none reverse',
    }});