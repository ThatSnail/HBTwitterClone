$('.post-button').click(function() {
	what_the_user_typed = $('textarea').val();
	$('#right').prepend('<div class="cell"><p>' + what_the_user_typed + '</p></div>');
	$('textarea').val('');
})
