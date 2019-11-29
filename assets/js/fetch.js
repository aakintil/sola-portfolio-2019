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

function addProjectPageContainers(document, doc) {
    setTimeout(() => {
        // need to scroll to the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // replace the content with new content
        let projectSections = doc.querySelectorAll('.section');
        for (var i = 0; i < projectSections.length; i++) {
            document.querySelector('body').appendChild(projectSections[i]);
        }

        // animate the replacement
        anime({
            easing: 'easeInOutQuad',
            targets: '.section',
            // opacity: [0, 1],
            duration: 700,
            scale: [0.99, 1]
        });
    }, 700);

    let scrollOutItems = document.querySelectorAll('[data-scroll]');
    let arrs = [...scrollOutItems]; 
    ScrollOut({
        onShown: function () {
            // use the web animation API
            console.log("visibile ");
            anime({
                threshold: 0.9,
                easing: 'easeInOutQuad',
                targets: scrollOutItems,
                opacity: [0, 1],
                duration: 1200,
                scale: [0.99, 1]
            });
        },
        onHidden: function () {
            // hide the element initially
            anime({
                threshold: 0.5,
                easing: 'easeInOutQuad',
                targets: scrollOutItems,
                opacity: [1, 0],
                duration: 1200,
                scale: [1, 0.99]
            });
        },
    });

    // attach animation event lisnters

    // add new event listeners
    let homeLink = doc.querySelector('#home-link');
    let cignaLink = doc.querySelector('#cigna-link');
    let fedexLink = doc.querySelector('#fedex-link');
    let gokadaLink = doc.querySelector('#gokada-link');
    let siriuslabsLink = doc.querySelector('#siriuslabs-link');
    let arr = [homeLink, cignaLink, fedexLink, gokadaLink, siriuslabsLink];

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

// ajax page loading fetch animations 
// https://www.youtube.com/watch?v=G5rGLY5uF7Y