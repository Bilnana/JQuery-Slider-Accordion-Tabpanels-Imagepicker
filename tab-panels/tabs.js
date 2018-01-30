$(function(){
   $('.tab-panels .tabs li').on('click',function(){
   	
   	   var panelToShow = $(this).attr('rel');
  
       $('.tab-panels .panel.active').slideUp(300,function(){
       	$(this).removeClass('active');
       	 	$('#'+ panelToShow).slideDown(300,function(){

       		$(this).addClass('active');
       	});
       });

       
    })
    
    console.log('ggggggggggggggg');

});