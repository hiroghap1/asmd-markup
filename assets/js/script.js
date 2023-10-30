const swiper = new Swiper('#swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 6000,
    }

});

// gsap.to('.section-company',{backgroundColor: '#fff',
//     scrollTrigger:{
//         trigger:'.section-company',
//         start:'top 40%',
//         end:'bottom 20%',
//         toggleActions:'play none none reverse',
//     }});
//
// gsap.utils.toArray('.fadeIn')
//     .forEach((item) => {
//         gsap.fromTo(item,
//             {
//                 opacity: 0,
//                 y: 20,
//             },
//             {
//                 opacity: 1,
//             y: 0,
//             scrollTrigger: {
//                 trigger: item,
//                 start: 'top 50%',
//                 end: 'bottom 20%',
//                 toggleActions: 'play none none reverse',
//             }
//         });
//     });