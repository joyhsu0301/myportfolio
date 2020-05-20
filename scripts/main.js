$(document).ready(function(){

	var pngset = [
		{
			'name': 'bembo',
			'image': 'png/bembo.png',
			'height': '300',
			'width' : '200',
			'show': 'true'
		},

		{
			'name': 'bembo hover',
			'image': 'png/bembo2.png',
			'height': '300',
			'width' : '200',
			'show': 'false'
		}, 

		{
			'name': 'friction logo',
			'image': 'png/frictionlogo.png',
			'height': '200',
			'width' : '350',
			'show': 'true'
		}, 

		{
			'name': 'gib',
			'image': 'png/gib.png',
			'height': '300',
			'width' : '300',
			'show': 'true'
		}, 

		{
			'name': 'gib hover',
			'image': 'png/gib2.png',
			'height': '300',
			'width' : '330',
			'show': 'false'
		}, 

		{
			'name': 'massimo',
			'image': 'png/massimo.png',
			'height': '330',
			'width' : '280',
			'show': 'true'
		},

		{
			'name': 'massimo hover',
			'image': 'png/massimo2.png',
			'height': '120',
			'width' : '200',
			'show': 'false'
		}, 

		{
			'name': 'postcard',
			'image': 'png/postcard.png',
			'height': '240',
			'width' : '360',
			'show': 'true'
		}, 

		{
			'name': 'postcard hover',
			'image': 'png/postcard2.png',
			'height': '120',
			'width' : '200',
			'show': 'false'
		}, 

		{
			'name': 'room',
			'image': 'png/room.png',
			'height': '320',
			'width' : '400',
			'show': 'true'
		},

		{
			'name': 'room hover',
			'image': 'png/room2.png',
			'height': '120',
			'width' : '200',
			'show': 'false'
		},

		{
			'name': 'scentlib',
			'image': 'png/scentlib.png',
			'height': '320',
			'width' : '500',
			'show': 'true'
		},

		{
			'name': 'scentlib hover',
			'image': 'png/scentlib3.png',
			'height': '320',
			'width' : '500',
			'show': 'false'
		},

		{
			'name': 'venmo',
			'image': 'png/venmo.png',
			'height': '200',
			'width' : '200',
			'show': 'true'
		},

		{
			'name': 'venmo hover',
			'image': 'png/venmo.gif',
			'height': '120',
			'width' : '200',
			'show': 'false'
		}

	]

	$('#lastname').on('mouseenter', function(){
		$('#lastname').css({'display': 'none'});
		$('#chinesename').css({'display': 'inline'});
	});
	$('#lastname').on('mouseleave', function(){
		$('#lastname').css({'display': 'inline'});
		$('#chinesename').css({'display': 'none'});
	});


	for(i=0; i<pngset.length; i++){
		var pngDiv = $('<div/>', {'class': 'pngdiv'})
		.data('png', pngset[i])
		if(pngset[i].show === 'true'){
			$(pngDiv).append('<img src="'+pngset[i].image+'" style="width: '+pngset[i].width+'px; height: '+pngset[i].height+'px;">')
		}
		// .on('mouseenter', function(){

		// });
		$('#png_box').append(pngDiv);
	}

	$('#firstname').click(function(){
		$('#png_box').empty();
	});



});