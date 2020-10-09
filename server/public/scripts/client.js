console.log(`js`);

$(document).ready(onReady);

function onReady() {
    console.log(`DOM-DOM DOM DOM DOMMMM`);

    // event listeners
    $('#calculate').on(`click`, calculate);

}

function calculate(){
    console.log(`clicked button!`);

    // STAPH RELOADING PAGE
    event.preventDefault();

    // get input
    let calculationItem = {
        numberOne: $(`#numberOneIn`).val(),
        numberTwo: $(`#numberTwoIn`).val(),
        operator: $(`#operatorIn`).val(),
    };
    console.log(`inputs:`, calculationItem);

    //POST to server
    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: calculationItem,
    })
    .then( function(response) {
        console.log('POST response: ', response);
        // clear them inputs out!
        clearInputs()
        
    });

}

function clearInputs() {
    // numbers
    $('#numberOneIn').val('');
    $('#numberTwoIn').val('');
    
}