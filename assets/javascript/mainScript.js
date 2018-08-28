// -- todo list functionality
//  start app
init();

// function wrapper
function init(){
    removeItems();
    cross();
    addNewItems();
}

// add delete functionality on x
function removeItems(){
    $('ul#todoList').on('click', 'span.delete', function(event) {

        // fade out parent li
        $(this).parent().fadeOut(500, function(){

            // once faded remove
            $(this).remove();
        });

        // stop generation of new events
        event.stopPropagation();
    });
}

function cross(){

    // gray out listitem on click
    $('ul#todoList').on('click', 'li', function(event){
        $(this).toggleClass('crossOut');
    });
}

// add a new li to the bullet
function newItem(value) {

    // create raw html for a new to-do item
    let bullet = '<li><span class="delete"><i class="fas fa-trash-alt"></i></span><span id="itemTxt"></span></li>';

    // add raw html to the to-do ul
    $('ul#todoList').append(bullet);

    // add urs text inside the raw html, this ensures usr cannot enter malicous code into our app directly
    $('ul#todoList li span#itemTxt').last().text(value);
}

// add enter button press listener to input
function addNewItems() {
    $('input#todoAdder').keypress(function(event){

        // if the enter key is hit ...
        if (event.which === 13) {

            // store the value current inside the input box
            let todo = $(this).val();

            // create a new to-do item
            newItem(todo);

            // reset content inside the input box
            $(this).val('');
        }
    });
}

$('h1 i').click(function(){
    $('#todoAdder').fadeToggle();
});
