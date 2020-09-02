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
			'link': 'online_portfolio.html'
		},

		{
			'name': 'Scent Library',
			'image': 'png/scentlib.png',
			'height': '600',
			'width' : '950',
			'link': 'online_portfolio.html'
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
			'link': 'online_portfolio.html'
		}, 

		{
			'name': 'Bembo Type Poster',
			'image': 'png/bembo.png',
			'height': '400',
			'width' : '300',
			'link': 'online_portfolio.html'
		}, 

		{
			'name': 'Vignelli Zine',
			'image': 'png/massimo.png',
			'height': '650',
			'width' : '500',
			'link': 'online_portfolio.html'
		},

		{
			'name': 'Friction Logo',
			'image': 'png/frictionlogo.png',
			'height': '350',
			'width' : '650',
			'link': 'online_portfolio.html'
		}, 

		{
			'name': 'Postcard',
			'image': 'png/postcard.png',
			'height': '540',
			'width' : '830',
			'link': 'online_portfolio.html'
		}, 

		{
			'name': 'Spaces',
			'image': 'png/room.png',
			'height': '520',
			'width' : '600',
			'link': 'online_portfolio.html'
		}

	]

	// interactions for the text on first page 
	$('#lastname').on('mouseenter', function(){
		$('#lastname').css({'display': 'none'});
		$('#chinesename').css({'display': 'inline'});
		$('#name_pronounce').css({'display': 'inline'});
	});
	$('#lastname').on('mouseleave', function(){
		$('#lastname').css({'display': 'inline'});
		$('#chinesename').css({'display': 'none'});
		$('#name_pronounce').css({'display': 'none'});
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

	$('#portfolio').on('mouseenter', function(){
		$('#hint').css({'display': 'inline'});
	});
	$('#portfolio').on('mouseleave', function(){
		$('#hint').css({'display': 'none'});
	});
	$('#portfolio').click(function(){
		console.log('there it is! when u scroll left, u can see all my works so far in lil pngs! now why not try clicking on each of them?');
		$('#introtext').fadeOut();
		$('#intro_png').fadeOut();
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
			var url= $(this).data("png").link;
			window.location.href= url;
			// $('#corner_text').fadeOut();
			// $('#goback').fadeIn();
			// $('body').css({'background-color': 'rgb(255,206,43)', 'transition': 'all 0.5s linear'});
			// $('#png_box').css({'top': '10%'});
			// $('#png_box').children().not($(this)).remove();
			// $('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h_image+'" style="width: '+$(this).data("png").h_width+'px; height: '+$(this).data("png").h_height+'px;">');
			// $('#png_box').append('<div class="description">'+$(this).data("png").text+'</div>');
			// $('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h2_image+'" style="width: '+$(this).data("png").h2_width+'px; height: '+$(this).data("png").h2_height+'px;">');
			// $('#png_box').append('<img class="ondisplay" src="'+$(this).data("png").h3_image+'" style="width: '+$(this).data("png").h3_width+'px; height: '+$(this).data("png").h3_height+'px;">');
			// $('#background').css({'display':'none'});
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
		$('#aboutme').empty().append('YOU WANNA LEARN MORE?');
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