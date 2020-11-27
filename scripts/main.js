$(document).ready(function(){

	console.log('dont know where to click? Try clicking on "portfolio" and see what happens!');

	var pngset = [

		// {
		// 	'name': 're-imagined album covers',
		// 	'image': 'png/vowels.png',
		// 	'height': '320',
		// 	'width' : '500',
		//  'link': 'covers.html'
		// },

		// {
		// 	'name': 'the ordinary things',
		// 	'image': 'png/tot.png',
		// 	'height': '600',
		// 	'width' : '600',
		// 	'link': 'tot.html'
		// },

		{
			'name': 'this website!',
			'image': 'smiley.png',
			'height': '200',
			'width' : '220',
			'link': 'this_website.html'
		},

		{
			'name': 'the scent library',
			'image': 'png/scentlib.png',
			'height': '600',
			'width' : '950',
			'link': 'scent_lib.html'
		},

		// {
		// 	'name': 'parasite: venmo',
		// 	'image': 'png/venmo.png',
		// 	'height': '200',
		// 	'width' : '200',
		// 	'h_image': 'png/venmo.gif',
		// 	'h_height': '200',
		// 	'h_width': '250'
		// },

		{
			'name': 'gold is boring',
			'image': 'png/gib.png',
			'height': '650',
			'width' : '525',
			'link': 'gib.html'
		}, 

		// {
		// 	'name': 'french cuisine wikibook',
		// 	'image': 'png/wiki.png',
		// 	'height': '600',
		// 	'width' : '600',
		// 	'link': 'wiki.html'
		// },

		{
			'name': 'bembo type poster',
			'image': 'png/bembo.png',
			'height': '400',
			'width' : '300',
			'link': 'bembo.html'
		}, 

		{
			'name': 'vignelli zine',
			'image': 'png/massimo.png',
			'height': '650',
			'width' : '500',
			'link': 'vignelli.html'
		},

		{
			'name': 'friction museum',
			'image': 'png/frictionlogo.png',
			'height': '350',
			'width' : '650',
			'link': 'friction.html'
		}, 

		{
			'name': 'richard serra postcard',
			'image': 'png/postcard.png',
			'height': '540',
			'width' : '830',
			'link': 'postcard.html'
		}, 

		// {
		// 	'name': 'Spaces',
		// 	'image': 'png/room.png',
		// 	'height': '520',
		// 	'width' : '600',
		// 	'link': 'online_portfolio.html'
		// }

	]

	// interactions for the text on first page 
	// $('#lastname').on('mouseenter', function(){
	// 	$('#lastname').css({'display': 'none'});
	// 	$('#chinesename').css({'display': 'inline'});
	// 	$('#name_pronounce').css({'display': 'inline'});
	// });
	// $('#lastname').on('mouseleave', function(){
	// 	$('#lastname').css({'display': 'inline'});
	// 	$('#chinesename').css({'display': 'none'});
	// 	$('#name_pronounce').css({'display': 'none'});
	// });

	// $('#firstname').data('clicked', false).click(function(){
	// 	$('#mobile_hint').css({'display': 'none'});
	// 	$(this).data('clicked', true);
	// 	$('#corner_text').fadeIn();
	// 	if($('#firstname').data('clicked') === false) {
	// 		// $('#firstname').fadeOut();
	// 		$('#corner_text').fadeIn();
	// 		//$('#chinesename').css({'display': 'inline'});
	// 		// $('#lastname').css({'display': 'none'});
	// 	} else {
	// 		$('#firstname').hover(function(){
	// 			$('#firstname').css({'animation': 'none', 'color': 'black', 'cursor': 'default'});
	// 		});
	// 	}
	// });

	// $('#portfolio').on('mouseenter', function(){
	// 	$('#hint').css({'display': 'inline'});
	// });
	// $('#portfolio').on('mouseleave', function(){
	// 	$('#hint').css({'display': 'none'});
	// });
	// $('#portfolio').click(function(){
	// 	console.log('there it is! when u scroll left, u can see all my works so far in lil pngs! now why not try clicking on each of them?');
	// 	$('#introtext').fadeOut();
	// 	$('#intro_png').fadeOut();
	// 	$('#png_box').css({'display': 'flex'});
	// 	$('#mobile_hint').css({'display': 'none'});
	// 	if($('#firstname').data('clicked') === true) {
	// 		$('body').css({'background-color': 'white'});
	// 	} else {
	// 		$('#corner_text').fadeIn();
	// 	}
	// });

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
	$('#aboutme').on('mouseenter', function(){
		$('#aboutme').empty().append('click me');
	});
	$('#aboutme').on('mouseleave', function(){
		$('#aboutme').empty().append('about me');
	});
	$('#aboutme').click(function(){
		$('#myinfo_nav').css({'height':'100%'});
		$('body').css({'overflow-x': 'hidden'});
	});
	$('#close').click(function(){
		$('#myinfo_nav').css({'height':'0%'});
		$('body').css({'overflow-x': 'visible'});
	});

});