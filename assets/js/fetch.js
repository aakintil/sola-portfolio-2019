// load new page content via fetch when link is clicked, and animate it
let cignaLink = document.querySelector('cigna-link');
let fedexLink = document.querySelector('fedex-link');
let gokadaLink = document.querySelector('gokada-link');
let siriuslabsLink = document.querySelector('siriuslabs-link');

let linkArray = [cignaLink, fedexLink, gokadaLink, siriuslabsLink];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', () => {
        switch (eachLink) {
            case cignaLink:
                fetchPage(eachLink, 'cigna.html'); 
            case fedexLink:

            case gokadaLink:

            case siriuslabsLink:

        }
    });
})