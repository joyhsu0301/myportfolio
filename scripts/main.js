$(document).ready(function(){

	console.log('dont know where to click? Try clicking on "portfolio" and see what happens!');

	var pngset = [

		// {
		// 	'name': 'Album Cover Re-design',
		// 	'image': 'png/vowels.png',
		// 	'height': '320',
		// 	'width' : '500',
		// 	'h_image': 'png/vowels.png',
		// 	'h_height': '320',
		// 	'h_width': '500',
		// 	'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		// },

		{
			'name': 'This Website!',
			'image': 'smiley.png',
			'height': '200',
			'width' : '220',
			'h_image': 'png/thiswebsite.png',
			'h_height': '620',
			'h_width': '950',
			'text': 'I have always wanted to create an online portfolio that best described me as a person and a designer. While I was creating this website, I made sure to do exactly that.'
		},

		{
			'name': 'Scent Library',
			'image': 'png/scentlib.png',
			'height': '620',
			'width' : '950',
			'h_image': 'png/scentlib3.png',
			'h_height': '620',
			'h_width': '950',
			'h2_image': 'png/scentlib2.png',
			'h2_height': '620',
			'h2_width': '950',
			'text': 'For a final project, we were tasked with creating a website which somehow presented a collection of objects using JSON objects.<br><br>Mimicking an online retail experience, I decided to create a website containing a collection of scents familiar or interesting to me. I wanted to translate my experiences of and memories associated with these scents into an interactive webpage. <a href="https://joyhsu0301.github.io/core-lab/final/index.html" target="_blank" class="links">Go To The Website</a>'
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
			'height': '500',
			'width' : '500',
			'h_image': 'png/gib2.png',
			'h_height': '300',
			'h_width': '400',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Bembo Type Poster',
			'image': 'png/bembo.png',
			'height': '400',
			'width' : '300',
			'h_image': 'png/bembo2.png',
			'h_height': '360',
			'h_width': '200',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Vignelli Zine',
			'image': 'png/massimo.png',
			'height': '560',
			'width' : '430',
			'h_image': 'png/massimo2.png',
			'h_height': '300',
			'h_width': '400',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		},

		{
			'name': 'Friction Logo',
			'image': 'png/frictionlogo.png',
			'height': '300',
			'width' : '550',
			'h_image': 'png/frictionlogo.png',
			'h_height': '300',
			'h_width': '550',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Postcard',
			'image': 'png/postcard.png',
			'height': '440',
			'width' : '700',
			'h_image': 'png/postcard2.png',
			'h_height': '240',
			'h_width': '360',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Dorm Room Illustrations',
			'image': 'png/room.png',
			'height': '420',
			'width' : '500',
			'h_image': 'png/room2.png',
			'h_height': '400',
			'h_width': '300',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
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
		$('#mobile_hint').css({'display': 'none'});
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
		$('#mobile_hint').css({'display': 'none'});
		if($('#firstname').data('clicked') === true) {
			$('body').css({'background-color': 'white'});
		} else {
			$('#corner_text').fadeIn();
		}
	});

	function originalpng (pngset) {
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
			// $('#expand_transition').css({'transform': 'scale(110)', 'background-color': 'rgb(255,206,43)', 'z-index': '1'});
			$('#corner_text').fadeOut();
			$('#goback').fadeIn();
			$('body').css({'background-color': 'rgb(255,206,43)', 'transition': 'all 0.5s linear'});
			// $('#png_box').css({'top': '10%'});
			$('#png_box').children().not($(this)).remove();
			$('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h_image+'" style="width: '+$(this).data("png").h_width+'px; height: '+$(this).data("png").h_height+'px;">');
			$('#png_box').append('<div class="description">'+$(this).data("png").text+'</div>');
			$('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h2_image+'" style="width: '+$(this).data("png").h2_width+'px; height: '+$(this).data("png").h2_height+'px;">');
		});
		$('#png_box').append(pngDiv);
		}
	}

	// appending og display list of my portfolio
	originalpng(pngset);

	$('#goback').click(function(){
		$('#png_box').empty();
		originalpng(pngset);
		$('#png_box').css({'top': '0px'});
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
		$('body').css({'overflow': 'hidden'});
	});
	$('#close').click(function(){
		$('#myinfo_nav').css({'height':'0%'});
		$('body').css({'overflow': 'visible'});
	});

	$('#random').click(function(){
		$('.wall').toggle();
	});


});