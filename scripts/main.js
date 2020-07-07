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
			'h_height': '600',
			'h_width': '950',
			'h2_image': 'png/thiswebsite3.png',
			'h2_height': '600',
			'h2_width': '950',
			'h3_image': 'png/thiswebsite2.png',
			'h3_height': '600',
			'h3_width': '950',
			'text': 'After creating the Scent Library project, I was inspired to create my own portfolio website with HTML, CSS and JavaScript. I wanted this website to best describe me as a person and a designer. <br><br> Be sure to keep browsing around this website!'
		},

		{
			'name': 'Scent Library',
			'image': 'png/scentlib.png',
			'height': '600',
			'width' : '950',
			'h_image': 'png/scentlib3.png',
			'h_height': '600',
			'h_width': '950',
			'h2_image': 'png/scentlib2.png',
			'h2_height': '600',
			'h2_width': '950',
			'h3_image': 'png/scentlib4.png',
			'h3_height': '600',
			'h3_width': '950',
			'text': 'For a final project, we were tasked with creating a website which somehow presented a collection of objects using JSON objects.<br><br>Mimicking an online retail experience, I decided to create a website containing a collection of scents familiar or interesting to me. I wanted to translate my experiences of and memories associated with these scents into an interactive webpage everyone can play around with. <a href="https://joyhsu0301.github.io/core-lab/final/index.html" target="_blank" class="links">Go To The Website</a>'
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
			'height': '600',
			'width' : '600',
			'h_image': 'png/gib4.png',
			'h_height': '470',
			'h_width': '550',
			'h2_image': 'png/gib2.png',
			'h2_height': '470',
			'h2_width': '650',
			'h3_image': 'png/gib3.png',
			'h3_height': '470',
			'h3_width': '350',
			'text': 'We were given an open-ended class assignment where we had the freedom to choose our own content and curate them into a designed booklet of some sort. <br><br>‘Gold is Boring’ is an anthology of articles written by various authors about their differing views on minimalism. The simple layout of the articles are contrasted with the Japanese snacks, a symbol of maximalism due to its mesmerizing packaging, chaotically placed over the spreads as the zine progresses. This reflects the conflicting opinions on minimalism as discussed in the articles throughout.'
		}, 

		{
			'name': 'Bembo Type Poster',
			'image': 'png/bembo.png',
			'height': '400',
			'width' : '300',
			'h_image': 'png/bembo2.png',
			'h_height': '600',
			'h_width': '350',
			'h2_image': 'png/bembo3.png',
			'h2_height': '550',
			'h2_width': '420',
			'h3_image': 'png/bembo4.png',
			'h3_height': '550',
			'h3_width': '420',
			'text': 'We were given an open-ended class assignment where we had the freedom to choose our own content and curate them into a designed booklet of some sort.'
		}, 

		{
			'name': 'Vignelli Zine',
			'image': 'png/massimo.png',
			'height': '650',
			'width' : '500',
			'h_image': 'png/massimo2.png',
			'h_height': '300',
			'h_width': '400',
			'text': 'massimo vignelli yessiR!'
		},

		{
			'name': 'Friction Logo',
			'image': 'png/frictionlogo.png',
			'height': '350',
			'width' : '650',
			'h_image': 'png/frictionlogo.png',
			'h_height': '300',
			'h_width': '550',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Postcard',
			'image': 'png/postcard.png',
			'height': '540',
			'width' : '830',
			'h_image': 'png/postcard2.png',
			'h_height': '240',
			'h_width': '360',
			'text': 'hello hello testing! testing, hope this is workingggg oh yay it is!'
		}, 

		{
			'name': 'Dorm Room Illustrations',
			'image': 'png/room.png',
			'height': '520',
			'width' : '600',
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
		$(this).data('clicked', true);
		$('#corner_text').fadeIn();
		if($('#firstname').data('clicked') === false) {
			// $('#firstname').fadeOut();
			$('#corner_text').fadeIn();
			//$('#chinesename').css({'display': 'inline'});
			// $('#lastname').css({'display': 'none'});
		} else {
			$('#firstname').hover(function(){
				$('#firstname').css({'animation': 'none', 'color': 'black', 'cursor': 'default'});
			});
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
			$('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h3_image+'" style="width: '+$(this).data("png").h3_width+'px; height: '+$(this).data("png").h3_height+'px;">');
			$('#background').css({'display':'none'});
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
		$('#background').css({'display': 'inline', 'transition': 'all 0.5s linear'});
	});

	// name of each project follows cursor on hover
	$(document).bind('mousemove', function(e){
		$('#tail').css({
			'left': e.pageX +5 + 'px',
			'top': e.pageY  -20 + 'px'
		});
	});

	//corner text interactions 
	$('#justforfun').on('mouseenter', function(){
		$('#justforfun').empty().append('JUST FOR FUN');
	});
	$('#justforfun').on('mouseleave', function(){
		$('#justforfun').empty().append('J');
	});
	$('#justforfun').click(function(){

	});

	$('#otherworks').on('mouseenter', function(){
		$('#otherworks').empty().append('HELLO');
	});
	$('#otherworks').on('mouseleave', function(){
		$('#otherworks').empty().append('O');
	});
	$('#otherworks').click(function(){

	});

	$('#aboutme').on('mouseenter', function(){
		$('#aboutme').empty().append('YOU WANNA REACH OUT? CLICK ME!');
	});
	$('#aboutme').on('mouseleave', function(){
		$('#aboutme').empty().append('Y');
	});
	$('#aboutme').click(function(){
		$('#myinfo_nav').css({'height':'100%'});
		$('body').css({'overflow-x': 'hidden'});
	});
	$('#close').click(function(){
		$('#myinfo_nav').css({'height':'0%'});
		$('body').css({'overflow-x': 'visible'});
	});

	$('#random').click(function(){
		$('.wall').toggle();
	});


});