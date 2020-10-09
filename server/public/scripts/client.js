console.log(`js`);

$(document).ready(onReady);

function onReady() {
    console.log(`DOM-DOM DOM DOM DOMMMM`);

    // event listeners
    $('#calculate').on(`click`, calculate);

}

function calculate(){
    console.log(`clicked button!`);

    // don't reload the page
    event.preventDefault();
}