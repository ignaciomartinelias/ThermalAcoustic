
// BARRA DE NAVEGACION

  // VISIBILIDAD SEGUN SCROLL

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mainNav").style.opacity = "1";
    } else {
      $("#mainNav").css({"opacity": "0", "transition": ".2s"});
    }
    prevScrollpos = currentScrollPos;
  }

  // SUBRRAYADO ITEMS EN BARRA DE NAVEGACION HOVER
  $(".nav-link").on("mouseover", function(event){
    if($(window).width()>992){
      $(this).next().css({"opacity": "1", "transition": "1s"});
    }
  })

  $(".nav-link").on("mouseout", function(event){
    if($(window).width()>992){
      $(this).next().css({"opacity": "0"});
    }
  })

// BOTON SCROLL TO TOP

  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').css( {"opacity": "1" })
    } else {
      $('.scroll-to-top').css({"opacity": "0"})
    }
  });


// SCROLL GENERAL LINKS

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
          }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      } // End if
    });
  });


// ANIMACION SECCION TRABAJOS

$(".image-preview1").on("mouseover" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview1").on("mouseout" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview2").on("mouseover" ,function(event){
  $(".image-preview1").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview2").on("mouseout" ,function(event){
  $(".image-preview1").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview3").on("mouseover" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview1").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview3").on("mouseout" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview1").toggleClass("blur-image");
  $(".image-preview4").toggleClass("blur-image");
})

$(".image-preview4").on("mouseover" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview1").toggleClass("blur-image");
})

$(".image-preview4").on("mouseout" ,function(event){
  $(".image-preview2").toggleClass("blur-image");
  $(".image-preview3").toggleClass("blur-image");
  $(".image-preview1").toggleClass("blur-image");
})