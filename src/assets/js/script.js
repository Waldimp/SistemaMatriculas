(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");

})(jQuery);

var rcolegio = document.getElementById("lblRadio");
var rcentro = document.getElementById("lblRadio2");
var rAlergia = document.getElementById("lblAlergia1");
var rAlergia2 = document.getElementById("lblAlergia2");

rcolegio.addEventListener('click' , function(){
	hermano1.disabled = false;
	gradoh1.disabled = false;
	hermano2.disabled = false;
	gradoh2.disabled = false;
	codh2.disabled = false;
	religion.disabled = false;
});

rcentro.addEventListener('click' , function(){
	hermano1.disabled = false;
	gradoh1.disabled = false;
	codh1.disabled = false;
	hermano2.disabled = false;
	gradoh2.disabled = false;
	codh2.disabled = false;
	religion.disabled = false;
});

rAlergia.addEventListener('click' , function(){
	AlergiRespuesta.disabled = false;
});

rAlergia2.addEventListener('click' , function(){
	AlergiRespuesta.disabled = false;
});
