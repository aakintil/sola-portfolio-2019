window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
// as soon as dom is loaded, execute functions
document.addEventListener('DOMContentLoaded', () => {

    // initial page load animation
    console.log("dom loaded ...");
    
    ScrollOut();
    setTimeout(() => {
        // animate the replacement
        anime({
            targets: '.section-header',
            opacity: [0, 1], 
            duration: 750
        });
    }, 1000);
});



// general page animations with anime.js
// https://www.youtube.com/watch?v=XiC5Lrh6CZY