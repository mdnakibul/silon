
$(document).ready(function() {
    $('#Carousel').carousel({
    interval: 2000
    })
});


$(document).ready(function(){
    var togglerBtn = document.querySelector('button.navbar-toggler');
    var secondNav = document.querySelector('ul.customNav2');
    $(togglerBtn).click(function(){
        $(secondNav).toggleClass("d-none");
    })
})


wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  