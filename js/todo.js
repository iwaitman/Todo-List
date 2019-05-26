// A todo gets crossed off when you click on it
$("ul").on('click', "li", function() {
	$(this).toggleClass('strikethrough');
});

// Click on X to delete todo
$("ul").on('click', "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut('300', function(){
		$(this).remove();
	});
});

// Add todos in the input
$("input[type='text']").on('keypress', function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> '+todoText+'</li>');
	}
});

// Toggle add to-do field
$("#plus").click(function() {
  $("input").slideToggle(100,function() {
    // Animation complete.
  });
});

// // potential input styling
// $("input").on('click', function() {
// 	$(this).toggleClass('inputClick');
// });