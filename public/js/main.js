// Script to change background color header

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#m-header").addClass("bgON");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#m-header").removeClass("bgON");
    }
  });