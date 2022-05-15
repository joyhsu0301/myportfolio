$(document).ready(function(){

	console.log('dont know where to click? Try clicking on "portfolio" and see what happens!');

	var pngset = [
		// {
		// 	'name': 'illustration portfolio',
		// 	'image': 'png/sketch.jpg',
		// 	'height': '400',
		// 	'width' : '200',
		//  	'link': 'covers.html'
		// },
		{
			'name': 'kravebeauty',
			'image': 'png/krave.png',
			'height': 'auto',
			'width' : '400',
		 	'link': 'krave.html'
		},

		{
			'name': 'the scent library',
			'image': 'png/scentlib.png',
			'height': '600',
			'width' : '980',
			'link': 'scent_lib.html'
		},


		{
			'name': 'motion graphics',
			'image': 'png/mg.png',
			'height': '500',
			'width' : '450',
		 	'link': 'motion.html'
		},

		{
			'name': 'the time capsule',
			'image': 'png/timecap.png',
			'height': '600',
			'width' : '980',
		 	'link': 'timecap.html'
		},

		{
			'name': 're-imagined album covers',
			'image': 'png/ac.png',
			'height': '420',
			'width' : '520',
		 	'link': 'covers.html'
		},

		{
			'name': 'liminal: an animated short',
			'image': 'png/goo.png',
			'height': '400',
			'width' : '400',
		 	'link': 'goo.html'
		},

		{
			'name': 'the ordinary things',
			'image': 'png/tot.png',
			'height': '300',
			'width' : '450',
			'link': 'tot.html'
		},

		{
			'name': 'this website!',
			'image': 'smiley.png',
			'height': '150',
			'width' : '160',
			'link': 'this_website.html'
		},

		{
			'name': 'thesis project',
			'image': 'png/thesis.png',
			'height': 'auto',
			'width' : '400',
		 	'link': 'thesis.html'
		},


		// {
		// 	'name': 'censorship boardgame',
		// 	'image': 'png/foc.png',
		// 	'height': '130',
		// 	'width' : '350',
		//  	'link': 'foc.html'
		// },

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
			'name': 'gold is boring (zine)',
			'image': 'png/drops.png',
			'height': '350',
			'width' : 'auto',
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
			'name': 'friction museum logo',
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
		}

	]

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

	//about me copy email to clipboard 
	function copyToClipboard() {
		var copyText = document.getElementById('email_handle');
		var textArea = document.createElement('textarea');
		textArea.value = copyText.textContent;
		document.body.appendChild(textArea);
		//Select the text field
  		textArea.select();
  		textArea.setSelectionRange(0, 99999); //for mobile devices

  		//Copy the text inside the text field
  		document.execCommand('copy');
  		textArea.remove();
  		alert(textArea.value + ' copied to your clipboard!');
	}

	$('#email_handle').click(function(){
		copyToClipboard();
	});

	//for the mobile collapsible 
	var coll = document.getElementsByClassName("collapsible");
	var i;

	console.log(coll)

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	  });
	}


});