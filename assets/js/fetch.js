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

function removeHomePageContainers(document) {
    let sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        // have to leave the old navigation so that we don't have to reattach event listeners
        sections[i].remove();
    }
}

function scrollOutCall() {
    console.log("6. starting to attach scroll out function")
    ScrollOut({
        onShown: function (el) {
            // use the web animation API
            console.log("on shown ");
            anime({
                easing: 'easeInOutQuad',
                targets: el, // ".cigna.section.section-overview.section-columns",
                opacity: [0, 1],
                duration: 1200,
                scale: [0.99, 1]
            });
        },
        onHidden: function (el) {
            // hide the element initially
            console.log("on hide ");
            anime({
                easing: 'easeInOutQuad',
                targets: el, //".cigna.section.section-overview.section-columns",
                opacity: [1, 0],
                duration: 1200,
                scale: [1, 0.99]
            });
        },
    });
}

function addProjectPageContainers(document, doc) {
    // hide the body 
    // anime({
    //     targets: 'body',
    //     opacity: [1, 0]
    // })
    // need to scroll to the top
    console.log('1. scroll to top')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // replace the content with new content
    console.log('2. attaching elements to dom')
    let projectSections = doc.querySelectorAll('.section');
    for (var i = 0; i < projectSections.length; i++) {
        document.querySelector('body').appendChild(projectSections[i]);
    }

    // animate the replacement
    console.log('3. animating dom elements to 0')
    anime({
        easing: 'easeInOutQuad',
        targets: '.section',
        opacity: [1, 0],
        duration: 0,
        scale: [1, 0.99]
    });

    setTimeout(() => {
        console.log("4. calling set timeout and animating elements to 1 \n")
        // animate the replacement
        anime({
            easing: 'easeInOutQuad',
            targets: '.section',
            opacity: [0, 1],
            duration: 700,
            scale: [0.99, 1],
            complete: function () {
                console.log("5. finished running anime function");
                scrollOutCall();
            }
        });
    }, 6700);


    // // add new event listeners
    // let homeLink = doc.querySelector('#home-link');
    // let cignaLink = doc.querySelector('#cigna-link');
    // let fedexLink = doc.querySelector('#fedex-link');
    // let gokadaLink = doc.querySelector('#gokada-link');
    // let siriuslabsLink = doc.querySelector('#siriuslabs-link');
    // let arr = [homeLink, cignaLink, fedexLink, gokadaLink, siriuslabsLink];

    // arr.forEach((eachLink) => {
    //     eachLink.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         switch (eachLink) {

    //             case homeLink:
    //                 fetchPage(eachLink, 'index.html');
    //                 break;

    //             case cignaLink:
    //                 fetchPage(eachLink, 'cigna.html');
    //                 break;

    //             case fedexLink:
    //                 fetchPage(eachLink, 'fedex.html');
    //                 break;

    //             case gokadaLink:
    //                 fetchPage(eachLink, 'gokada.html');
    //                 break;

    //             case siriuslabsLink:
    //                 fetchPage(eachLink, 'siriuslabs.html');
    //                 break;

    //         }
    //     });
    // })
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

// ajax page loading fetch animations 
// https://www.youtube.com/watch?v=G5rGLY5uF7Y