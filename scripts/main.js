$(document).ready(function(){


	var pngset = [
		// {
		// 	'name': 'illustration portfolio',
		// 	'image': 'png/sketch.jpg',
		// 	'height': '400',
		// 	'width' : '200',
		//  	'link': 'covers.html'
		// },

		{
			'name': 'angelika',
			'image': 'png/angelika.png',
			'height': '500',
			'width' : 'auto',
		 	'link': 'angelika.html',
		 	'cat': 'brandIdentity,socialMediaDesign'

		},

		{
			'name': 'kravebeauty',
			'image': 'png/krave.png',
			'height': 'auto',
			'width' : '400',
		 	'link': 'krave.html',
		 	'cat': 'brandIdentity,socialMediaDesign'

		},

		{
			'name': 'the scent library',
			'image': 'png/scentlib.png',
			'height': '600',
			'width' : '980',
			'link': 'scent_lib.html',
			'cat': 'frontEndCoding,webDesign'
		},


		{
			'name': 'motion graphics',
			'image': 'png/mg.png',
			'height': '500',
			'width' : '450',
		 	'link': 'motion.html',
		 	'cat': 'stopMotion'
		},

		// {
		// 	'name': 'the time capsule',
		// 	'image': 'png/timecap.png',
		// 	'height': '600',
		// 	'width' : '980',
		//  	'link': 'timecap.html'
		// },

		{
			'name': 're-imagined album covers',
			'image': 'png/ac.png',
			'height': '420',
			'width' : '520',
		 	'link': 'covers.html',
		 	'cat': 'brandIdentity,illustration'
		},

		{
			'name': 'liminal: an animated short',
			'image': 'png/goo.png',
			'height': '400',
			'width' : '400',
		 	'link': 'goo.html',
		 	'cat': 'animation'
		},

		{
			'name': 'the ordinary things',
			'image': 'png/tot.png',
			'height': '300',
			'width' : '450',
			'link': 'tot.html',
			'cat': 'brandIdentity,editorial'
		},

		{
			'name': 'this website!',
			'image': 'smiley.png',
			'height': '150',
			'width' : '160',
			'link': 'this_website.html',
			'cat': 'brandIdentity,webDesign,frontEndCoding'
		},

		{
			'name': 'thesis project',
			'image': 'png/thesis.png',
			'height': 'auto',
			'width' : '400',
		 	'link': 'thesis.html',
		 	'cat': 'brandIdentity,editorial'
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
			'link': 'gib.html',
			'cat': 'brandIdentity,editorial'
		}

		// {
		// 	'name': 'french cuisine wikibook',
		// 	'image': 'png/wiki.png',
		// 	'height': '600',
		// 	'width' : '600',
		// 	'link': 'wiki.html'
		// },

		// {
		// 	'name': 'bembo type poster',
		// 	'image': 'png/bembo.png',
		// 	'height': '400',
		// 	'width' : '300',
		// 	'link': 'bembo.html'
		// }, 

		// {
		// 	'name': 'vignelli zine',
		// 	'image': 'png/massimo.png',
		// 	'height': '650',
		// 	'width' : '500',
		// 	'link': 'vignelli.html'
		// },

		// {
		// 	'name': 'friction museum logo',
		// 	'image': 'png/frictionlogo.png',
		// 	'height': '350',
		// 	'width' : '650',
		// 	'link': 'friction.html'
		// }, 

		// {
		// 	'name': 'richard serra postcard',
		// 	'image': 'png/postcard.png',
		// 	'height': '540',
		// 	'width' : '830',
		// 	'link': 'postcard.html'
		// }

	]

	function originalpng (pngset) {
		for(i=0; i<pngset.length; i++){
		var pngDiv = $('<div/>', {'class': 'pngdiv'})
		.data('png', pngset[i])
		.append('<img class="ondisplay" data-cat="'+pngset[i].cat+'" src="'+pngset[i].image+'" style="width: '+pngset[i].width+'px; height: '+pngset[i].height+'px;">')
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

	$('#hidden_back').click(function(){

		let pngs = document.getElementsByClassName('pngdiv');

		for (let i=0; i< pngs.length;i++) {
			pngs[i].classList.remove('hide');
		}

		$('#png_box').css({'top': '0px'});
		$('#corner_text').fadeIn();
		$('body').css({'background-color': 'white', 'transition': 'all 0.5s linear'});
		$('#background').css({'display': 'inline', 'transition': 'all 0.5s linear'});
		$('#catdisplay').toggle(reset);
		$('#sortby').slideToggle(600);
		$('#aboutme').slideToggle(600);
		$('#hidden_back').slideToggle(600);
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
		$('#aboutme').empty().append('About Me');
	});
	$('#aboutme').on('mouseleave', function(){
		$('#aboutme').empty().append('Joy Hsu');
	});
	$('#aboutme').click(function(){
		$('#myinfo_nav').css({'height':'100%'});
		$('body').css({'overflow-x': 'hidden'});
	});
	$('#close').click(function(){
		$('#myinfo_nav').css({'height':'0%'});
		$('body').css({'overflow-x': 'visible'});
	});
	$('#sortby').click(function(){
		$('#scrollarrow').slideToggle(600);
		$('#catdisplay').toggle(reset);
		$('#aboutme').slideToggle(600);
		$('#sortby').slideToggle(600);
		$('#hidden_back').slideToggle(600);
	});
	$('#hidden_back').click(function(){
		$('#scrollarrow').slideToggle(600);
	});

	function reset() {
		$('#catdisplay').children().each(function(){
			$(this).css({'background-color': 'white', 'color': 'blue'})
		});
	}

	$('.catbox').click(function(){

		let category = $(this).data('cat');
		let pngs = document.getElementsByClassName('pngdiv');

		for (let i=0; i< pngs.length;i++) {
			let str = pngs[i].firstChild.dataset.cat;
			if (str.indexOf(',') > -1) {
				let arr = str.split(',');
				for (let j=0; j<arr.length;j++) {
					if (arr[j] == category) {
						pngs[i].classList.remove('hide');
						break;
					} else {
						pngs[i].classList.add('hide');
					}
				}
			} else {
				if (str == category) {
					pngs[i].classList.remove('hide');
				} else {
					pngs[i].classList.add('hide');
				}
			}
		}

		// console.log($(this).html());
		// $("#png_box").children().each(function()

		// let t1 = document.getElementsByClassName('pngdiv');

		// 	for (let j=0;j<t1.length;j++){

		// 	console.log($(this).data('cat'));
		// 	//If the png contains multiple categories
		// 	if ($(this).data('cat').indexOf(',') >= 0) {
		// 		let arr = $(this).data('cat').split(',');
		// 		for (let i=0;i<arr.length;i++) {
		// 			if (arr[i] == temp) {
		// 				//show
		// 				$(this).hide();
		// 			} else {
		// 				//hide
		// 				$(this).show();
		// 			}
		// 		}
		// 	//if it contains only 1
		// 	} else {
		// 		if ($(this).data('cat') == temp) {
		// 			//show
		// 			$(this).hide();
		// 		} else {
		// 			//hide
		// 			$(this).show();
		// 		}
		// 	}
 	// 	});
		$('#catdisplay').children().each(function(){
			$(this).css({'background-color': 'white', 'color': 'blue'})
		})
		$(this).css({'background-color': 'blue', 'color': 'white'});
	});

	//on hover animation maybe
	// $('.catbox').hover(function(){
	//   $(this).css("font-family": '');
	//   }, function(){
	//   $(this).css();
	// });

	//filter function
	

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

	$(window).bind('scroll', function() {
     if ($(window).scrollLeft() > 200) {
         $('#scrollarrow').hide(300);
     }
     else {
         $('#scrollarrow').show(600);
     }
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