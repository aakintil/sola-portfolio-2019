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
        if (!sections[i].classList.contains('section-projects')) {
            sections[i].remove();
        }
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
            document.querySelector('body').insertBefore(projectSections[i], document.querySelector('.section-projects'));
        }

        // animate the replacement
        anime({
            easing: 'easeInOutQuad',
            targets: '.section',
            opacity: [0, 1],
            duration: 700,
            scale: [0.99, 1]
        });
    }, 700);
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
                    doc.querySelector('#home-link').addEventListener('click', (event) => {
                        console.log(page)
                    })
                    // console.log(doc.querySelector('#home-link'))
 
                    if (page === 'index.html') {
    
                    }
                    else {
                        console.log("what to do")
                        removeHomePageContainers(document);
                        addProjectPageContainers(document, doc);
                    }

                }
            });
        })
        .catch(error => {
            console.log('errorrrr ', error)
        })
}

// ajax page loading fetch animations 
// https://www.youtube.com/watch?v=G5rGLY5uF7Y