$(document).ready(function(){
	// console.log('hi');

	$('#home').on('mouseenter', function(){
		$('#home_text').css({'display':'inline'});
	});
	$('#home').on('mouseleave', function(){
		$('#home_text').css({'display':'none'});
	});

	$('#leftarrow').on('mouseenter', function(){
		$('#next_text').css({'display': 'inline'});
	});
	$('#leftarrow').on('mouseleave', function(){
		$('#next_text').css({'display': 'none'});
	});

	$('#rightarrow').on('mouseenter', function(){
		$('#before_text').css({'display': 'inline'});
	});
	$('#rightarrow').on('mouseleave', function(){
		$('#before_text').css({'display': 'none'});
	});
});