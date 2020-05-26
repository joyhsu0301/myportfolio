$(document).ready(function(){

	var pngset = [
		{
			'name': 'scentlib',
			'image': 'png/scentlib.png',
			'height': '320',
			'width' : '500',
			'h_image': 'png/scentlib3.png',
			'h_height': '320',
			'h_width': '500'
		},

		{
			'name': 'venmo',
			'image': 'png/venmo.png',
			'height': '200',
			'width' : '200',
			'h_image': 'png/venmo.gif',
			'h_height': '200',
			'h_width': '250'
		},

		{
			'name': 'gib',
			'image': 'png/gib.png',
			'height': '300',
			'width' : '300',
			'h_image': 'png/gib2.png',
			'h_height': '300',
			'h_width': '400'
		}, 

		{
			'name': 'bembo',
			'image': 'png/bembo.png',
			'height': '300',
			'width' : '200',
			'h_image': 'png/bembo2.png',
			'h_height': '340',
			'h_width': '200'
		}, 

		{
			'name': 'friction logo',
			'image': 'png/frictionlogo.png',
			'height': '200',
			'width' : '350'
		}, 

		{
			'name': 'massimo',
			'image': 'png/massimo.png',
			'height': '330',
			'width' : '280',
			'h_image': 'png/massimo2.png',
			'h_height': '300',
			'h_width': '400'
		},

		{
			'name': 'postcard',
			'image': 'png/postcard.png',
			'height': '240',
			'width' : '360',
			'h_image': 'png/postcard2.png',
			'h_height': '240',
			'h_width': '360'
		}, 

		{
			'name': 'room',
			'image': 'png/room.png',
			'height': '320',
			'width' : '400',
			'h_image': 'png/room2.png',
			'h_height': '300',
			'h_width': '240'
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
		.append('<img class="show" src="'+pngset[i].image+'" style="width: '+pngset[i].width+'px; height: '+pngset[i].height+'px;">')
		.on('mouseenter', function(){
			$(this).empty();
			$(this).append('<img src="'+$(this).data("png").h_image+'" style="width: '+$(this).data("png").h_width+'px; height: '+$(this).data("png").h_height+'px;">');
		})
		.on('mouseleave', function(){
			$(this).empty();
			$(this).append('<img src="'+$(this).data("png").image+'" style="width: '+$(this).data("png").width+'px; height: '+$(this).data("png").height+'px;">');
		});
		$('#png_box').append(pngDiv);
	}

});