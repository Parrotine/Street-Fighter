$(document).ready(function() {
	doIntro();

	var keypressed=false;

	// Ryu animations

	$('.ryu').mouseenter(function(){
		if(!keypressed) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	.mouseleave(function() {
		if(!keypressed) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();

		}
	})
	.mousedown(function(){
		if(!keypressed) {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate(
				{'left': '1020px'},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '520px');
				});
			}
		})

		.mouseup(function(){
			if(!keypressed) {
				$('.ryu-throwing').hide();
				$('.ryu-ready').show();
			}
		});


		// This is what happens when you press 'X'

		$(document).keydown(function(x) {
			if (x.keyCode == 88) {
				keypressed=true;
				playCool();
				$('.ryu-ready').hide();
				$('.ryu-cool').show();
				$('.ryu-still').hide();
				$('.ryu-throwing').hide();
			}
		})
		.keyup(function(x) {
			if (x.keyCode == 88) {
				keypressed=false;
				$('.ryu-cool').hide();
				$('.ryu-ready').show();
				$('#cool')[0].pause();
				$('#cool')[0].load();

			}
		});

		// This plays the music when you press 'X'

		var coolSound = false;
		function playCool () {
			coolSound = !coolSound;
			if (coolSound) {
				$('#theme-song')[0].pause();
				//$('#cool')[0].load()
				$('#cool')[0].play();
			}
		}

		// Hadouken sound effect

		var hadoukenSound = false;
		function playHadouken () {
			hadoukenSound = !hadoukenSound;
			if (hadoukenSound) {
				$('#hadouken-sound')[0].volume = 0.5;
				$('#hadouken-sound')[0].load();
				$('#hadouken-sound')[0].play();
			}
		}

		// The actual theme song code

		function doIntro() {
			$('#theme-song')[0].volume = 0.3;
			$('#theme-song')[0].play();
			$('.sf-logo').fadeIn(3500, function() {
				$(this).fadeOut(1000, function() {
					$('.brought-by').fadeIn(1500, function() {
						$(this).fadeOut(1000, function() {
							$('.jquery-logo').fadeIn(1500, function() {
								$(this).fadeOut(1500, function() {
									$('.how-to').fadeIn(1000);
								});
							})
						})
					})
				})
			})
		}

	});
