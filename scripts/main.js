$(document).ready(function(){

	console.log('dont know where to click? Try clicking on "portfolio" and see what happens!');

	var pngset = [
		{
			'name': 'Scent Library',
			'image': 'png/scentlib.png',
			'height': '320',
			'width' : '500',
			'h_image': 'png/scentlib3.png',
			'h_height': '320',
			'h_width': '500'
		},

		// {
		// 	'name': 'venmo',
		// 	'image': 'png/venmo.png',
		// 	'height': '200',
		// 	'width' : '200',
		// 	'h_image': 'png/venmo.gif',
		// 	'h_height': '200',
		// 	'h_width': '250'
		// },

		{
			'name': 'Gold Is Boring',
			'image': 'png/gib.png',
			'height': '300',
			'width' : '300',
			'h_image': 'png/gib2.png',
			'h_height': '300',
			'h_width': '400'
		}, 

		{
			'name': 'Bembo Type Poster',
			'image': 'png/bembo.png',
			'height': '300',
			'width' : '200',
			'h_image': 'png/bembo2.png',
			'h_height': '360',
			'h_width': '200'
		}, 

		{
			'name': 'Friction Logo',
			'image': 'png/frictionlogo.png',
			'height': '200',
			'width' : '350',
			'h_image': 'png/frictionlogo.png',
			'h_height': '200',
			'h_width': '350'
		}, 

		{
			'name': 'Vignelli Zine',
			'image': 'png/massimo.png',
			'height': '360',
			'width' : '280',
			'h_image': 'png/massimo2.png',
			'h_height': '300',
			'h_width': '400'
		},

		{
			'name': 'Postcard',
			'image': 'png/postcard.png',
			'height': '240',
			'width' : '360',
			'h_image': 'png/postcard2.png',
			'h_height': '240',
			'h_width': '360'
		}, 

		{
			'name': 'Dorm Room Illustrations',
			'image': 'png/room.png',
			'height': '320',
			'width' : '400',
			'h_image': 'png/room2.png',
			'h_height': '400',
			'h_width': '300'
		}

	]

	// interactions for the text on first page 
	$('#lastname').on('mouseenter', function(){
		$('#lastname').css({'display': 'none'});
		$('#chinesename').css({'display': 'inline'});
	});
	$('#lastname').on('mouseleave', function(){
		$('#lastname').css({'display': 'inline'});
		$('#chinesename').css({'display': 'none'});
	});

	$('#firstname').data('clicked', false).click(function(){
		if($(this).data('clicked') === false) {
			$('#firstname').fadeOut();
			$('#corner_text').fadeIn();
			$('#chinesename').css({'display': 'inline'});
			$('#lastname').css({'display': 'none'});
		}
	});

	$('#portfolio').click(function(){
		console.log('there it is! when u scroll left, u can see all my works so far in lil pngs! now why not try clicking on each of them?');
		$('#introtext').fadeOut();
		$('#png_box').css({'display': 'flex'});
		if($('#firstname').data('clicked') === true) {
			$('body').css({'background-color': 'white'});
		} else {
			$('#corner_text').fadeIn();
		}
	});

	// appending og display list of my portfolio
	for(i=0; i<pngset.length; i++){
		var pngDiv = $('<div/>', {'class': 'pngdiv'})
		.data('png', pngset[i])
		.append('<img class="ondisplay" src="'+pngset[i].image+'" style="width: '+pngset[i].width+'px; height: '+pngset[i].height+'px;">')
		.on('mouseenter', function(){
			$('#tail').css({'display': 'inline'})
			.empty()
			.append('<p class="cursor_text">'+$(this).data("png").name+'</p>');
		})
		.on('mouseleave', function(){
			$('#tail').empty();
		})
		.click(function(){
			$(this).empty().append('<img class="ondisplay" src="'+$(this).data("png").h_image+'" style="width: '+$(this).data("png").h_width+'px; height: '+$(this).data("png").h_height+'px;">');
			// $('#expand_transition').css({'transform': 'scale(110)', 'background-color': 'rgb(255,206,43)', 'z-index': '1'});
			$('#corner_text').fadeOut();
			$('#goback').fadeIn();
			$('body').css({'background-color': 'rgb(255,206,43)', 'transition': 'all 0.5s linear'});
		});
		$('#png_box').append(pngDiv);
	}

	$('#goback').click(function(){
		// $('#expand_transition').css({'transform': 'scale(0.1)', 'background-color': 'none'});
		$('#goback').fadeOut();
		$('#corner_text').fadeIn();
		$('body').css({'background-color': 'white', 'transition': 'all 0.5s linear'});
	});

	// name of each project follows cursor on hover
	$(document).bind('mousemove', function(e){
		$('#tail').css({
			'left': e.pageX +5 + 'px',
			'top': e.pageY  -20 + 'px'
		});
	});

	//corner text interactions 
	$('#aboutme').on('mouseenter', function(){
		$('#aboutme').empty().append('YOU WANNA REACH OUT? CLICK ME!');
	});
	$('#aboutme').on('mouseleave', function(){
		$('#aboutme').empty().append('Y');
	});
	$('#aboutme').click(function(){
		$('#myinfo_nav').css({'height':'100%'});
	});
	$('#close').click(function(){
		$('#myinfo_nav').css({'height':'0%'});
	});

	$('#random').click(function(){

	});


});