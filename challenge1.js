console.log('jQuery is ready');

$(document).ready(readyNow);

let clickCount = 0;

function readyNow(){
$('#generateButton').on('click', clickClick);
console.log('Button works');


function clickClick(){
clickCount++;
console.log(clickCount);
generateDiv();
}
 
function generateDiv(){
$('#generateButton').append('<div></div>');
}

//$('<div></div').append('<p>' + '#totalCount' + '</p>');
//$('#generateButton').append('<button>Swap</button>');
//$('#generateButton').append('<button>Delete</button>');

}

//// I am super consused on how to create the functions. I get the logic, but it takes me a while to fugure it out how to put the fuctions together. I need extra help. I will do what Luke said and will review the javascript mini challenges. Please, let me know what else to do because this info isn't sinking in.
/// Thanks.