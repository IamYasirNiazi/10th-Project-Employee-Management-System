(function($) {
  "use strict";
  
 // menu 
  $('.sidebar__open').click( function (){ 
    $('.main-menu, .body_overlay').addClass('active');   
  }); 
  $('.closeX, .body_overlay').click( function (){ 
    $('.main-menu, .body_overlay').removeClass('active');   
  }); 

  $('select').niceSelect();


  var tableOffset = $("#table-1").offset().top;
  var $header = $("#table-1 > thead").clone();
  var $fixedHeader = $("#table-header-fixed").append($header);
  
  $(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
  
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
      $fixedHeader.show();
    } else if (offset < tableOffset) {
      $fixedHeader.hide();
    }
  });


})(jQuery);



// Calendar Sorting functionality.
// document.getElementById("table-1")
// new DataTable("#table-1");
