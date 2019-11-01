// as soon as dom is loaded, execute functions

document.addEventListener('DOMContentLoaded', () => {
    // initial page load animation
    console.log("dom loaded")
    anime.timeline({
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.section-header h1', 
            opacity: [0, 1], 
            translateY: [50, 0],
            delay: 1000, 
            duration: 1750,
            offset: '+=50'
            // width: ['0%', '100%']
        })
});

// https://www.youtube.com/watch?v=XiC5Lrh6CZY