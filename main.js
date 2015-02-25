$(document).ready(function(){

// $('ul').hover(function(){
// 	$(this).addClass('center');
// 	$('li').addClass('inline');
// 	$('a').addClass('links');
// });

// alert 
$('h1').hover(function(){
	alert("Welcome to the Page");
});

$('h2').hover(function(){
	$(this).animate({
		height:'toggle'
	});
});


// BUTTONS!
// change button color
$('#first').click(function(){
	$(this).css({"background-color":"blue", color:"white", "border-radius":"25px"}).text('I changed color!');
});

// hide paragraph 2
$('#second').click(function(){
	$('#para1').hide();
	$('#second_thing h3').text('Where did the first paragraph go?');
});

// change the text of the labels
$('#third').click(function(){
	$('#third_thing h3').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
        })
   	.text("I'm animated");
});

// get the text of paragraph 1

$('#fourth').click(function(){
	$('#fourth_thing h3').text('Console is logging the second paragraph!');
	console.log($('#para2').text());

});

});