$(function(){
	  //set intervall
	  //set margin
	  //set if last image

	 var width= 960;
	 var curentSlide=1;

	 var $slider=$('#slider');
	 var $slideContainer=$slider.find('.slides');
	 var $slides=$slideContainer.find('.slide');

	 

	  setInterval(function(){
	    $slideContainer.animate({'margin-left': '-=' + width },1000, function(){

			curentSlide++;

		    if (curentSlide === $slides.length){
		    	curentSlide=1;
		    	$slideContainer.css('width',1200);
		    }

	    });
	   
	  },3000);
});


