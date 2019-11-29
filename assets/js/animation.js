// as soon as dom is loaded, execute functions

document.addEventListener('DOMContentLoaded', () => {
    // need to scroll to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // ScrollOut();

    // initial page load animation
    console.log("dom loaded");

    // anime({
    //     easing: 'easeInOutQuad',
    //     targets: '.section-header h1',
    //     opacity: [0, 1],
    //     translateY: [50, 0],
    //     delay: 1000,
    //     duration: 1000,
    //     scale: [0.90, 1]
    // });
});


ScrollOut({
    onShown: function (el) {
        // use the web animation API
        anime({
            threshold: 0.5,
            easing: 'easeInOutQuad',
            targets: el,
            opacity: [0, 1],
            duration: 1200,
            scale: [0.99, 1]
        });
    },
    onHidden: function (el) {
        // hide the element initially
        anime({
            threshold: 0.5,
            easing: 'easeInOutQuad',
            targets: el,
            opacity: [1, 0],
            duration: 1200,
            scale: [1, 0.99]
        });
    },
});

// general page animations with anime.js
// https://www.youtube.com/watch?v=XiC5Lrh6CZY