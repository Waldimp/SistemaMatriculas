$(function () {
			$('input, textarea').focus(function() {
				$(this).parent().addClass('trans');
			}).blur(function() {
				if ($(this).val() == ''){
					$(this).parent().removeClass('trans');
				}
			});
			$('.clopen').click(function(){
				$(this).toggleClass('text');
				$('.register').toggleClass('opened');
        if($('.register').hasClass('opened')){
					$('.login').css('height',$('.register').height());
				}else{
					$('.login').css('height','auto');					
				}
			});
		})