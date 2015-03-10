$(document).ready(function() {

	$(function(){
		$(window).load(function(){ // On load
			$('#enter').css({'height':(($(window).height()))+'px'});
			$('#ny').css({'width':(($(window).width()))+'px'});
			$('.navbar-inner').css({'height':(($(window).height()))+'px'});
			$('.container').css({'height':(($(window).height()))+'px'});
			$('.content-container').css({'height':(($(window).height()))+'px'});
			$('.aboutli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.professionalli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.skillsli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.projectsli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.contactli').css({'width':((($(window).width())/5)-24)+'px'});
			$('#Spencer').css({'width':((($(window).width())/5)-4)+'px'});
		});
		$(window).resize(function(){ // On resize
			$('#enter').css({'height':(($(window).height()))+'px'});
			$('#ny').css({'width':(($(window).width()))+'px'});
			$('.navbar-inner').css({'height':(($(window).height()))+'px'});
			$('.container').css({'height':(($(window).height()))+'px'});
			$('.content-container').css({'height':(($(window).height()))+'px'});
			$('.aboutli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.professionalli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.skillsli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.projectsli').css({'width':((($(window).width())/5)-24)+'px'});
			$('.contactli').css({'width':((($(window).width())/5)-24)+'px'});
			$('#Spencer').css({'width':((($(window).width())/5)-4)+'px'});
		});
	});

	$(window).scroll(function() {
                if ($(window).scrollTop() > $(window).height()) {
                    $('.container').addClass('stuck');
                    $('.navbar-inner').addClass('stuck');
                } else {
                    $('.container').removeClass('stuck');
                    $('.navbar-inner').removeClass('stuck');
                }

                if ($('.about').visible(true)) {
    				$('.aboutli').addClass('select');
    			} else {
    				$('.aboutli').removeClass('select');
    			}

                if ($('.projects').visible(true)) {
    				$('.projectsli').addClass('select');
    			} else {
    				$('.projectsli').removeClass('select');
    			}

                if ($('.professional-experience').visible(true)) {
    				$('.professionalli').addClass('select');
    			} else {
    				$('.professionalli').removeClass('select');
    			}

                if ($('.contact').visible(true)) {
    				$('.contactli').addClass('select');
    			} else {
    				$('.contactli').removeClass('select');
    			}    	

                if ($('.skills').visible(true)) {
    				$('.skillsli').addClass('select');
    			} else {
    				$('.skillsli').removeClass('select');
    			}  		

            });


  $('.down_arrow')
    // On mouse over, move the background on hover
   .mouseover(function() {
     $(this).css('backgroundPosition', '0 20px');
   })
   // On mouse out, move the background back
   .mouseout(function() {
     $(this).css('backgroundPosition', '0 0');
   })

   $('#arrow_link').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
	});

      $('#abo').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

  $('#proj').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

   $('#prof').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

      $('.brand').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

   $('#con').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

   $('#ski').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
	});

});