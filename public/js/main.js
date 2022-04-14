const header = document.getElementById('js-header');
// Change color menu
function fixedMenu(){
    if(window.pageYOffset > 50){ // get the height of the menu fixed after 80px
      header.classList.add('bgON');
    }
    else{
      header.classList.remove('bgON');
    }
  }
document.addEventListener('scroll', fixedMenu); // get only the scroll of the page

// Menu Mobile
const btn_mobile = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('#main-nav')
btn_mobile.forEach(btn => {
    btn.addEventListener('click', function() {
        nav.classList.toggle('active')
    })
})