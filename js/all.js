function PreLoader(){
   $('#loadingLayer').hide().css('opacity','0');
   $('body').removeClass('blocked');
};
//do things when screen is resised
$(window).load(function(){
  setHeight();
}).on('resize',function(){
  setHeight();
});
//form validation function
function validateForm(){
  var name = $('#name').val();
  var content = $('#message').val();
  var e = $('#email').val();
  var atpos = e.indexOf("@");
  var dotpos = e.lastIndexOf(".");
  var no_e_alert = $('.alert_email').length === 0;
  var wrong_email = (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length);
  if (name === ''){
    if($('.alert_name').length === 0){
      $('<p class="alert alert_name">Podaj nam swoje imie.</p>').insertAfter('#name');
    };
    return false
  }else if( wrong_email ) {
    if(no_e_alert){
      $('<p class="alert alert_email">Wpisz poprawny adres email.</p>').insertAfter('#email');
    };
    return false
  }else if($('#message').val() === ''){
    if($('.alert_content').length === 0){
      $('<p class="alert alert_content">Wpisz tresc wiadomości.</p>').insertAfter('#content');
    }
    return false
  }else{
    return true;
  }
};
$(document).ready(function(){
// animate images scaling
$('.icons-large').hover(function(){
	$(this).children('div:first').animate({bottom:'0px'}, 10);
}, function(){
	$(this).children('div:first').animate({bottom:'-25px'}, 10);
});
// validate form on submit
  $("#form_email").submit(function(event){
    if (validateForm()) {
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      var dataString = '&name=' + name + '&email=' + email + '&message=' + message;
      $.ajax({
          type: "POST",
          url: "email.php",
          data: dataString,
          success: function(dataOut) {
            $('<br/><p class="success">Wiadomość została wysłana.</p>').insertAfter('.cta');
            $(':input').val('')
            setTimeout(function() {
              if ($('p.success').length){
                $('p.success').fadeOut(300);
              }
            }, 5000);
          },
          error: function() {
            $('<br/><p class="alert server">Pojawił się problem.Spróbuj jeszcze raz</p>').insertAfter('.cta');
            setTimeout(function() {
              if ($('p.server').length){
                $('p.server').fadeOut(300);
              }
            }, 5000);
          }
      });
    }
    return false;
  });
// show hide validation messages
	$(':input , textarea').focus(function(){
	  if ($('.alert_name').length === 1){
	    $('.alert_name').remove();
	  }else if ($('.alert_email').length === 1){
	    $('.alert_email').remove();
	  }else if($('.alert_content').length === 1){
	    $('.alert_content').remove();
	  };
	});
//evoslider settings
  $("#mySlider").evoSlider({
    mode: "scroller",                  
    width: 832,                        
    height: 400,                        
    slideSpace: 5,                      

    mouse: false,                        
    keyboard: true,                    
    speed: 900,                         
    easing: "easeInBack",                    
    loop: true,                         

    autoplay: true,                     
    interval: 10000,                     
    pauseOnHover: true,                 
    pauseOnClick: true,                 
    
    directionNav: true,                
    directionNavAutoHide: false,        

    controlNav: true,                   
    controlNavAutoHide: false           
	});
//scroll window function
	$('a[href=#content_1_link]').click(function(){
		$('html,body').animate({ scrollTop: $("#filler_1").offset().top },'3000', 'easeOutCirc');
		return false;});
	$('a[href=#content_2_link]').click(function(){
		$('html,body').animate({ scrollTop: $("#filler_2").offset().top },'3000', 'easeOutCirc');
		return false;});
	$('a[href=#content_3_link]').click(function(){
		$('html,body').animate({ scrollTop: $("#filler_3").offset().top },'3000', 'easeOutCirc');
		return false;});
	$('a[href=#content_4_link]').click(function(){
		$('html,body').animate({ scrollTop: $("#filler_4").offset().top },'3000', 'easeOutCirc');
		return false;});
//animate icons in footer
	$('#clock,#phone,#mail,#comp').mouseover(function(){
	  $(this).animate({
	      "height":15, 
	      "width":15, 
	      "direction":'both'
	  },function(){$(this).animate({
	      "height":20, 
	      "width":20, 
	      "direction":'both'
	      });
	    });
	  });
//swap images
	$('#myImage').hover(
		function(){$(this).attr('src','img/home_btn_over.png')},
		function(){$(this).attr('src','img/home_btn.png')
	});

});
// detect position of the body on scroll
$(window).scroll(function (){
  var element_1 = $("#filler_1").offset().top + $('#home_wrap').height();	
  var element_2 = $("#filler_2").offset().top + $('#about_wrap').height();
  var element_3 = $("#filler_3").offset().top + $('#services_wrap').height();
  var element_4 = $("#filler_4").offset().top + $('#contact_wrap').height();
  var totalscroll = $(window).scrollTop();

	if (totalscroll <= element_1){
     	$("body").attr("id", "body_hom");
    }else if (totalscroll <= element_2){
     	$("body").attr("id", "body_abo");
    }else if(totalscroll <= element_3){
     	$("body").attr("id", "body_ser");
    }else if (totalscroll <= element_4){
     	$("body").attr("id", "body_con");	
    }else{}; 
});

