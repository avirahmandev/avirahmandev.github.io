$(function() {

	// tampilkan item projects
	generateProjects();

	// open navbar
	$('.open-nav').click(function() {
		$('#mobileNav').css('height', '100%');
		$('#mobileNav').css('transition', '1s');
		$('.overlay-content').animate({
			opacity: '1'}, 1000);
		// hidden scroll x & y
		$('body').css('overflow-y', 'hidden');
	});

	// close navbar
	$('.close-nav, .nav-menu-mobile').click(function() {
		$('#mobileNav').css('height', '0');
		$('#mobileNav').css('transition', '0.5s');
		$('.overlay-content').animate({
			opacity: '0'}, 100);
		// visible y scroll
		$('body').css('overflow-y', 'visible');
	});

	// effect text typing
	var typed = new Typed('.profession', {
		strings: ['Web Developer', 'Game Developer'],
		typeSpeed: 100,
		backSpeed: 20,
		startDelay: 100,
		backDelay: 1000,
		loop: true
	});

	// function page scroll
	$('.page-scroll').on('click', function(e) {

		// ambil nilai href
		var gethref = $(this).attr('href');
		// tangkap elemen yg bersangkutan
		var elemTujuan = $(gethref);
		// function scroll smooth
		$('html, body').animate({
			scrollTop: elemTujuan.offset().top - 60
		}, 1500, 'easeInOutExpo');

		e.preventDefault();
	});

});