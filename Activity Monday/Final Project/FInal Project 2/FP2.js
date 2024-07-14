// Function to handle tab switching
function opentab(tabname) {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('tab-activate');
    }
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove('block-activate');
    }

    document.querySelectorAll(`.${tabname}`).forEach(tab => {
        tab.classList.add('tab-activate');
    });
    document.getElementById(tabname).classList.add('block-activate');
}
