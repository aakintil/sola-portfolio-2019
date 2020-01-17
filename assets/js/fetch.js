// TODOs
// 1. update and organize all this code
// 2. create a way so that the url changes to reflect the page you're on
//  https://carlofontanos.com/using-history-js-with-ajax/
//  https://github.com/browserstate/history.js

// load new page content via fetch when link is clicked, and animate it
let cignaLink = document.querySelector('#cigna-link');
let fedexLink = document.querySelector('#fedex-link');
let gokadaLink = document.querySelector('#gokada-link');
let siriuslabsLink = document.querySelector('#siriuslabs-link');

let linkArray = [cignaLink, fedexLink, gokadaLink, siriuslabsLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', (event) => {
        event.preventDefault();
        switch (eachLink) {
            case cignaLink:
                fetchPage(eachLink, 'cigna.html');
                break;

            case fedexLink:
                fetchPage(eachLink, 'fedex.html');
                break;

            case gokadaLink:
                fetchPage(eachLink, 'gokada.html');
                break;

            case siriuslabsLink:
                fetchPage(eachLink, 'siriuslabs.html');
                break;

        }
    });
})

function addProjectPageContainers(document, doc) {
    // need to scroll to the top
    window.scrollTo({
        top: '-100',
        behavior: 'smooth'
    });

    // hide the body so users don't see lag and what not
    anime({
        targets: 'body',
        opacity: [1, 0]
    })


    // replace the content with new content
    // attaching elements to the dom
    let projectSections = doc.querySelectorAll('.section');
    for (var i = 0; i < projectSections.length; i++) {
        document.querySelector('body').appendChild(projectSections[i]);
    }

    // animate the new content from opaque to invisible
    anime({
        easing: 'easeInOutQuad',
        targets: '.section',
        opacity: [1, 0],
        duration: 0,
        scale: [1, 0.99]
    });

    // attach scrollout events to the new content
    scrollOutCall();

    // attach event listeners to the new content project navigation
    reattachEventListeners(document);

    // after all that is done, animate the body back to visible, and animate the rest of the page
    setTimeout(() => {
        // animate the replacement
        anime({
            targets: 'body',
            opacity: [0, 1]
        });
        anime({
            easing: 'easeInOutQuad',
            targets: '.section',
            opacity: [0, 1],
            duration: 700,
            scale: [0.99, 1]
        });

        // TODO
        // lazy load the images somehow 
        // https://www.youtube.com/watch?v=QHi4fUhiSMI
        // https://github.com/aFarkas/lazysizes 
        // https://github.com/malchata/yall.js
        // https://thinker3197.github.io/progressively/
        // https://www.youtube.com/watch?reload=9&v=AMteSxT5uGM

        // TODO 
        // scrolling issue on firefox
        // https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects



    }, 700);
}

function reattachEventListeners(doc) {
    // add new event listeners
    let homeLink = doc.querySelector('#home-link');
    let cignaLink = doc.querySelector('#cigna-link');
    let fedexLink = doc.querySelector('#fedex-link');
    let gokadaLink = doc.querySelector('#gokada-link');
    let siriuslabsLink = doc.querySelector('#siriuslabs-link');
    let arr = [homeLink, cignaLink, fedexLink, gokadaLink, siriuslabsLink];
    let button = doc.querySelector('.scroll-top-button-container');

    button.addEventListener('click', (event) => {
        // need to scroll to the top
        window.scrollTo({
            top: '-100',
            behavior: 'smooth'
        });
    }); 

    arr.forEach((eachLink) => {
        eachLink.addEventListener('click', (event) => {
            event.preventDefault();
            switch (eachLink) {

                case homeLink:
                    fetchPage(eachLink, 'index.html');
                    break;

                case cignaLink:
                    fetchPage(eachLink, 'cigna.html');
                    break;

                case fedexLink:
                    fetchPage(eachLink, 'fedex.html');
                    break;

                case gokadaLink:
                    fetchPage(eachLink, 'gokada.html');
                    break;

                case siriuslabsLink:
                    fetchPage(eachLink, 'siriuslabs.html');
                    break;

            }
        });
    })
}

function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }
    fetch(`${baseURL}/${page}`)
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            let doc = new DOMParser().parseFromString(html, 'text/html');

            // animate as soon as we call this function 
            anime({
                easing: 'easeInOutQuad',
                targets: '.section',
                opacity: 0,
                duration: 700,
                scale: [1, 0.99],
                complete: (anim) => {
                    removeHomePageContainers(document);
                    addProjectPageContainers(document, doc);
                }
            });
        })
        .catch(error => {
            console.log('errorrrr ', error)
        })
}

function removeHomePageContainers(document) {
    let sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        // have to leave the old navigation so that we don't have to reattach event listeners
        sections[i].remove();
    }
}

function scrollOutCall() {
    ScrollOut({
        onShown: function (el) {
            // use the web animation API
            anime({
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
                easing: 'easeInOutQuad',
                targets: el,
                opacity: [1, 0],
                duration: 1200,
                scale: [1, 0.99]
            });
        },
    });
}


// ajax page loading fetch animations 
// https://www.youtube.com/watch?v=G5rGLY5uF7Y