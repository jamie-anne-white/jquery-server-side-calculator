console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('dom loaded');

    // event listeners
    $('#calculate').on('click', calculate);
    getHistory();
    clearInputs();
}

// takes input from DOM and sends to server
function calculate(event) {
    console.log('clicked button');
    // don't reload the page
    event.preventDefault();
    
    let calculationItem = {
        numberOne: $('#numberOneIn').val(),
        numberTwo: $('#numberTwoIn').val(),
        operator: $('#operatorIn').val(),
    };

    console.log('inputs: ', calculationItem);

    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: calculationItem,
    })
    .then( function(response) {
        console.log('POST response: ', response);
        clearInputs();
        getHistory();
    });

}

function getHistory() {
    $.ajax({
        url: '/history',
        method: 'GET',
    })
    .then( function(response) {
        console.log('GET response: ', response);
        // append to DOM

        $('#answer').empty();
        if(response.length) {
            $('#answer').text(response[0].result); 
        }        

        $('#historyList').empty();

        for(let calculation of response) {
            $('#historyList').append(
                `<li>
                    ${calculation.numberOne} ${calculation.operator} ${calculation.numberTwo} = ${calculation.result}
                </li>`
            )
        }
    });
}

function clearInputs() {
    // numbers
    $('#numberOneIn').val('');
    $('#numberTwoIn').val('');

    // focus on first input field not totally sure on this one.
    
    $('#numberOneIn').focus();
    
}