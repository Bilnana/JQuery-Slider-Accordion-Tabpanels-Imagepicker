
     $('.main-link').on('click',function(e){

         $(this).children().addClass('active').slideToggle('slow');
         e.preventDefault();
         
     });


