let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-list');
let menuItem = document.querySelectorAll('.header-item');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})
$(document).ready(function() {
    fixedHeader();
    $(window).scroll(function () {
      fixedHeader();
    });
  
    function fixedHeader() {
      if (window.pageYOffset > 0) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    }
}
)
