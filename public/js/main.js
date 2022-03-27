// Script to change background color header

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#m-header").addClass("bgON");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#m-header").removeClass("bgON");
    }
  });

// Menu Mobile

const btn_mobile = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('#main-nav')

btn_mobile.forEach(btn => {
    btn.addEventListener('click', function() {
        nav.classList.toggle('active')
    })
})