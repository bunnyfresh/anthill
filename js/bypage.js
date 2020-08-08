var element

function testSupportsSmoothScroll () {
  var supports = false
  try {
    var div = document.createElement('div')
    div.scrollTo({
      top: 0,
      get behavior () {
        supports = true
        return 'smooth'
      }
    })
  } catch (err) {}
  return supports
}

var webSupport = testSupportsSmoothScroll();

if (webSupport === true) {
  if (document.body.clientWidth >= 1023) {
    let page = pageYOffset/window.innerHeight + 1;
    if (Math.floor(page * 10) / 10 == 2 || Math.floor(page * 10) / 10 == 2.1) {
      page = 2;
    } else if (Math.floor(page * 10) / 10 == 3 || Math.floor(page * 10) / 10 == 3.1) {
      page = 3;
    } else if (Math.floor(page * 10) / 10 == 3.4 || Math.floor(page * 10) / 10 == 3.3) {
      page = 4;
    } else if (Math.floor(page * 10) / 10 == 4.4 || Math.floor(page * 10) / 10 == 4.3) {
      page = 5;
    } else if (Math.floor(page * 10) / 10 == 5.9 || Math.floor(page * 10) / 10 == 5.8) {
      page = 6;
    } else if (Math.floor(page * 10) / 10 == 6.9 || Math.floor(page * 10) / 10 == 6.8) {
      page = 7;
    } else if (Math.floor(page * 10) / 10 == 8.2 || Math.floor(page * 10) / 10 == 8.1) {
      page = 8;
    } else if (Math.floor(page * 10) / 10 == 8.9 || Math.floor(page * 10) / 10 == 8.8) {
      page = 9;
    } else if (Math.floor(page * 10) / 10 == 9.9 || Math.floor(page * 10) / 10 == 9.8) {
      page = 10;
    } else if (Math.floor(page * 10) / 10 == 10.1) {
      page = 11;
    }

    page = 1


  function pageUp() {
    if ($(".contact-btn").hasClass("active") != true) {
      console.log('page' , page)

      if (page > 1) {

        if (page == 2 || page == 1) {
          $(".contact-btn").addClass("hidden");
          $(".to-top").removeClass("visible");
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else if (page == 3) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.this-hover').offset();
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 4) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.text-and-pecman').offset();
          window.scrollTo({
            top: element.top -  (window.innerHeight - $('.text-and-pecman').height()),
            behavior: "smooth"
          });
        } else if (page == 5) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.dots2').offset();
          window.scrollTo({
            top: element.top - window.innerHeight/10,
            behavior: "smooth"
          });
        } else if (page == 6) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.for-what-image').offset();
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        } else if (page == 7) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.flower1-image').offset();
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 8) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.flower2-image').offset();
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        } else if (page == 9) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.so-what').offset();
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 10) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.so-what-text').offset();
          console.log(element);
          window.scrollTo({
            top: element.top - (window.innerHeight - $('.so-what-text').height() - 60),
            behavior: "smooth"
          });
        } else if (page == 11) {
          $(".contact-btn").removeClass("hidden");
          $(".to-top").addClass("visible");
          element = $('.portfolio').offset();
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        } else {
          window.scrollTo({
            top: pageYOffset - window.innerHeight,
            behavior: "smooth"
          });
        }
        page--;
      }
    }
  }

  function pageDown() {
    if ($(".contact-btn").hasClass("active") != true || page == 1) {
      if (page < 11) {
        page++;

        $(".to-top").addClass("visible");

        if (page == 2) {
          $(".contact-btn").removeClass("hidden");
          $(".this-hover").addClass('animated');
          element = $('.this-hover').offset();
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 3) {
          $(".contact-btn").removeClass("hidden");
          element = $('.text-and-pecman').offset();
          window.scrollTo({
            top: element.top -  (window.innerHeight - $('.text-and-pecman').height()),
            behavior: "smooth"
          });
        } else if (page == 4) {
          element = $('.dots2').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top - window.innerHeight/10,
            behavior: "smooth"
          });
        } else if (page == 5) {
          element = $('.for-what-image').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        } else if (page == 6) {
          element = $('.flower1-image').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 7) {
          $(".detail-block").addClass('animated');
          element = $('.flower2-image').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        } else if (page == 8) {
          element = $('.so-what').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top - window.innerHeight/2.5,
            behavior: "smooth"
          });
        } else if (page == 9) {
          element = $('.so-what-text').offset();
          $(".contact-btn").removeClass("hidden");
          window.scrollTo({
            top: element.top - (window.innerHeight - $('.so-what-text').height() - 60),
            behavior: "smooth"
          });
        } else if (page == 10) {
          $(".contact-btn").removeClass("hidden");
          element = $('.portfolio').position();
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        }else if (page == 11) {
          $(".contact-btn").addClass("hidden");
          element = $('footer').position();
          window.scrollTo({
            top: element.top,
            behavior: "smooth"
          });
        }
      }
    }
  }

    const scrollHandler = function(event) {
      if (event.type == 'mousewheel') {
        if (event.originalEvent.wheelDelta >= 0) {
          pageUp()
        } else {
          pageDown()
          }
        console.log(page);
          }
          else if (event.type == 'DOMMouseScroll') {
            if (event.originalEvent.detail < 0) {
              pageUp()
            } else {
              pageDown()
            }
          } else if (event.type == 'wheel') {
            if (event.originalEvent.wheelDelta >= 0) {
              pageUp()
            } else {
              pageDown()
              }
          }
      $(".to-top").addClass("visible");

      $(window).off('mousewheel DOMMouseScroll wheel scroll');
      setTimeout(e => $(window).on('mousewheel DOMMouseScroll wheel' , scrollHandler), 800);
    }

    $(window).bind('mousewheel DOMMouseScroll wheel', scrollHandler);

    $(".to-top").click( function() {
      $(this).removeClass('visible');
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    $(window).off('mousewheel DOMMouseScroll wheel scroll');
    setTimeout(e => $(window).on('mousewheel DOMMouseScroll wheel scroll' , scrollHandler), 800);
    page = 1;
    });
  }

  $(".to-top").click( function() {
    if (document.body.clientWidth < 768) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }
  });


  $(".to-top-footer").click( function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  });


  var last_position = 0;

  // var h = window.innerHeight
  // || document.documentElement.clientHeight
  // || document.body.clientHeight;

  // $(document).on('mousedown', function(e){
  //   //setup a variable to store our last position

  //   last_position = 0;
  //   scroll_position = (e.pageY - e.offsetY );
  //   console.log(scroll_position)
  //   //note that `.on()` is new in jQuery 1.7 and is the same as `.bind()` in this case
  //   $(window).on('mousemove', function (event) {
  //       //check to make sure there is data to compare against
  //       if (typeof(last_position) != 'undefined') {


  //           //get the change from last position to this position
  //           var deltaY = last_position - event.clientY;

  //           //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
  //           // local_position = deltaY ;
  //           // console.log(deltaY)
  //           if ( deltaY > 0) {
  //             window.scrollTo({
  //               top:  scroll_position += 8 ,
  //               // behavior: "smooth"
  //             });
  //             // $(window).scrollTop(0, last_position );
  //           } else if ( deltaY < 0) {

  //             window.scrollTo({
  //               top: scroll_position -= 8,
  //               // behavior: "smooth"
  //             });
  //           }


  //       }

  //       last_position = event.clientY;

  //       // console.log((deltaY - event.offsetY));

  //       //set the new last position to the current for next time




  //   });


  // });

  // $(document).on('mouseup' , function(){
  //   console.log('upppp' , last_position);
  //   // local_position = 0;
  //   last_position = 0;
  //   $(window).off("mousemove");
  // }); 
         var scr = $(document);
         var deltaY = 0;
         var beforeScroll = 0;
         var st = 0;

         scr.mousedown(function (event) {
            var startY = scr.scrollTop() + event.pageY;
            beforeScroll = scr.scrollTop();
           
            scr.mousemove(function (e) { 
                deltaY = last_position - event.clientY;
                
                st = startY - e.pageY;

                window.scrollTo({
                  top: st,
                  behavior: "smooth"
              });

                last_position = e.clientY;

                return false;

             }); 
         });

         $(window).mouseup(function () {

          // console.log(deltaY)
            if ( deltaY > 150) {
              pageUp()
            } else if ( deltaY < -150) {
              pageDown()
            } else {
              window.scrollTo({ top: beforeScroll , behavior: 'smooth'  });
            }

            beforeScroll = 0
            // $(window).off("mousewheel DOMMouseScroll scroll", returnFalse);
            scr.off("mousemove");

         });

  $(window).on('beforeunload' , () => {
    $(window).scrollTop(0)
  })


  




} else {
  $('body').css({'overflow':'visible'});
  $(document).on( 'scroll', function(){
    if (pageYOffset > 1) {
      $(".contact-btn").removeClass('hidden');
      $(".to-top").addClass('visible');
    } else {
      $(".contact-btn").addClass('hidden');
      $(".to-top").removeClass('visible').hide();
    }
  });
  $(".to-top , .to-top-footer").click(function() {
    window.scrollTo(0, 0);
  })

  
}
