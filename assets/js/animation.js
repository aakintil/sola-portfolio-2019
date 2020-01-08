window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
// as soon as dom is loaded, execute functions
document.addEventListener('DOMContentLoaded', () => {

    // initial page load animation
    console.log("dom loaded ...");

    // after all that is done, animate the body back to visible, and animate the rest of the page
    setTimeout(() => {
        console.log("4. calling set timeout and animating elements to 1 \n")
        // animate the replacement
        anime({
            targets: 'body',
            opacity: [0, 1]
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
    }, 1000);
});



// general page animations with anime.js
// https://www.youtube.com/watch?v=XiC5Lrh6CZY