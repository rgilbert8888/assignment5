// Initializing - add reference to the jquery library to html doc w/ CDN:
// 
// Example HTML...
//	<head>
// 		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
// 	</head>

// Test for jquery in the console by typing $


// Selecting

// selecting by element name

$('p')
$('h2')

// selecting by class name

$('.className')

// selecting by ID

$('#wrapper')

// Making sure Document is Ready: so that code will only run when page is fully loaded..anything
// outside could show up before page is loaded..

$(document).ready(function(){
	// some code in here!
});

// Example of how to be sure:

$(document).ready(function(){
	alert("ready!");
});


//EVENTS:  

//Clicks to initiate events

$("p").click(clickEvent);


$("h2").click(function(e) {
 	console.log(e.currentTarget.innerHTML);
});

//currentTarget acts like the this keyword:

$( "p" ).click(function( event ) {
  alert( event.currentTarget === this ); // true
});

//Click to Hide:

$('h1').on('click',function(){
	$(this).hide(); //or .show() or .toggle()
});

//Click to Change Test

$('h1').on('click', function(){ 
	$(this).text("hello");    
});

//Difference between .text() and .html() ??

$('body').text();
// console returns text content of page
$('body').html();
//console returns the text and html markup of the page
$('h1').html("<b>Test</b>");
// puts new html tags and text into the page
$('h1').text("<b>Test</b>");
// puts all in as text only 


// Scrolling to initiate event

$(window).scroll(
	function(){
		console.log("scrolling");
	});

// Hover to Initiate Event

$('h2').hover(function(){
	console.log('im hovering!');
});

//Do Something when something changes 
//(typically for inputs, text boxes)

$('#firstName').change(
	function(e) {
		var target = $(e.currentTarget);
		alert( target.val() ); //browser alerts new text that was entered into feild
	};
);

//keypress event

// keydown() - Called when the key is pressed while element is "in focus"


//Changing CSS

$('h2').css( {
  color:"red"
});


//fade effects



