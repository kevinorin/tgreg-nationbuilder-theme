$( document ).ready(function() {
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Collapse mobile menu after selection
  $(function(){ 
    var navMain = $("#nav-main");
    navMain.on("click", "a", null, function () {
       navMain.collapse('hide');
    });
  });
});