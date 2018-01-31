$(function(){
  //set intervall
  //set margin
  //set if last image
// <div class="wrap">
//   <div class="container">
//     <div class="first-box">
//       <img src="first.jpg">
//     </div>
//     <div class="second-box">
//       <img src="second.jpg">
//     </div>
//     <div class="third-box">
//       <img src="third.jpg">
//     </div>
//   </div>

//   <div class="container2">
    
//   </div>
// </div>


$(function(){

   // var divSelected = $(this).attr('class');
   // var selectedClass= '.'+ divSelected;
   // alert(selectedClass);

  $('.first-box').mouseover(function(){
      var selectedImg = $(this).find('img').attr('src');
      $('.container2 img').attr('src',selectedImg);
  });

    $('.second-box').mouseover(function(){
      var selectedImg = $(this).find('img').attr('src');
      $('.container2 img').attr('src',selectedImg);
  });

     $('.third-box').mouseover(function(){
      var selectedImg = $(this).find('img').attr('src');
      $('.container2 img').attr('src',selectedImg);
  });
  
  });


});
