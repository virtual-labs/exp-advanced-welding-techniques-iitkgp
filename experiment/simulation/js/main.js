
(function ($) {

	var copyRightHTML = '<div class="copyright">&copy; VLabs IIT KGP.</div>';
	$("#footer").append(copyRightHTML);

	$(document).on("change", "#polarity", function () {
		if($('#polarity').val() == "normal"){
			$("#slideshow").show();
			$("#slideshow > div:gt(0)").hide();
			$("#slideshowReverse").hide();
		}
		else{
			$("#slideshowReverse").show();
			$("#slideshowReverse > div:gt(0)").hide();
			$("#slideshow").hide();
		}
	});

	$(document).on("click", "#submit_values", function () {

			var w = $('#Speed').val();
			var v = $('.Weld-Speed').val();

			var A = 13.5;
			var B = 0.017;
			var C = 129;
			var D = -0.017;
			var a1 = 0.00377;
			var b1 = -3.13*Math.pow(10,-6);
			var n = a1 + (b1*v);
			var mrr = (A+B*v)+(C+D*v)*Math.exp(-n*w);

			var timesRun = 0;



			var interval =	setInterval(function () {
					$('#slideshow > div:first')
						.hide()
						.next()
						.show()
						.end()
						.appendTo('#slideshow');
					timesRun += 1;
					if(timesRun === 122){
						clearInterval(interval);

						$(".mrr_value b").html(mrr + " N-m");
					}
				}, (150000/v));

	});

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

	function sound(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		document.body.appendChild(this.sound);
		this.play = function(){
			this.sound.play();
		}
		this.stop = function(){
			this.sound.pause();
		}
	}

	var $window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			target: $body,
			visibleClass: 'is-menu-visible',
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});

	$("#slideshow > div:gt(0)").hide();
	$("#slideshowReverse").hide();

	$('input[type="range"]').on('input', function() {

		var control = $(this),
		  controlMin = control.attr('min'),
		  controlMax = control.attr('max'),
		  controlVal = control.val(),
		  controlThumbWidth = control.data('thumbwidth');

		var range = controlMax - controlMin;

		var position = ((controlVal - controlMin) / range) * 100;
		var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
		var output = control.next('output');

		output
		  .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
		  .text(controlVal);

	});


})(jQuery);
