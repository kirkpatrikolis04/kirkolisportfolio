document.addEventListener('DOMContentLoaded', function() {
    if ($('.marquee')) {
		$('.marquee').webTicker({
			startEmpty: false,
            speed: 45,
            duplicate: true,
            hoverpause: false,
		});
	}
    
});
