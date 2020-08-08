images= document.querySelectorAll(".portfolio-image");
for (var i = 0; i < images.length; i++) {
  let span = document.createElement('span');
  span.className = "navigation-btn";
  span.setAttribute("btnNumber", (i+1));
  $(".navigation").append(span);
}


function selectSize(number, event) {
  $(".navigation-btn").removeClass('active');
  $(".navigation-btn:eq("+(number-1)+")").addClass('active');
  elementList = document.querySelectorAll(".portfolio-image");
  for (var i = 0; i < elementList.length; i++) {
    $("[number="+(i+1)+"]").removeClass('active');
    $("[number="+(i+1)+"]").addClass("none");
  }

  $("[number="+number+"]").removeClass("none");
  $("[number="+number+"]").addClass('active');
  event.addClass('active');
}

function next(objectNumber) {
  if (objectNumber == 6) {
    objectNumber = 1;
  } else {
    objectNumber++;
  }
  console.log(objectNumber);
  selectSize(objectNumber, $("[number="+objectNumber+"]"));
  return objectNumber;
}

function prev(objectNumber) {
  if (objectNumber == 1) {
    objectNumber = 6;
  } else {
    objectNumber--;
  }
  console.log(objectNumber);
  selectSize(objectNumber, $("[number="+objectNumber+"]"));
  return objectNumber;
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
      $(".next-btn").removeClass("active");
      $(".navigation").removeClass("active");
}
});

let num = 1;

$(".next-btn").click( function() {
  num = next(num);
});

$(".prev-btn").click( function() {
  num = prev(num);
});

$(".navigation-btn").click( function() {
  btnNum = $(this).attr('btnNumber');
  selectSize(btnNum, $("[number="+btnNum+"]"));
});

$(".contact-btn").click( function() {
  $(this).toggleClass('active');
  $(".overflow-info").toggleClass('active');
  $(".call-information").toggleClass('active');
  $("body").toggleClass('hidden');
  $(".dark-screen").toggleClass('active');
});

$(".contact-btn-mobile").click( function() {
  $(this).addClass('active');
  $("body").addClass('hidden');
  $(".dark-screen").addClass('active');
  $(".call-information-mobile").addClass('active');
  $(".contact-info-mobile").addClass('active');
  $(".to-top").addClass('active');
});

$(".dark-screen").click( function() {
  if (document.body.clientWidth < 768) {
    $(this).removeClass('active');
    $(".contact-btn-mobile").removeClass('active');
    $("body").removeClass('hidden');
    $(".call-information-mobile").removeClass('active');
    $(".contact-info-mobile").removeClass('active');
    $(".to-top").removeClass('active');
  }

});



function selectSizeMobile(number, event) {
  elementList = document.querySelectorAll(".portfolio-image-mobile");
  for (var i = 0; i < elementList.length; i++) {
    $("[numberMobile="+(i+1)+"]").removeClass('active');
  }
  $("[numberMobile="+number+"]").addClass('active');
}

window.addEventListener('scroll', function() {
  if ((document.body.clientHeight - pageYOffset - window.innerHeight) < 390) {
    console.log(document.body.clientHeight - pageYOffset - window.innerHeight);
    $(".contact-btn-mobile").addClass('hidden');
  } else {
    $(".contact-btn-mobile").removeClass('hidden');
  }
});


// $(".portfolio-image-mobile").click( function() {
//   if (!$(this).hasClass('clicked')) { // если класса нет
//     $(this).addClass('clicked'); // добавляем класс
//     $(".next-btn-mobile").addClass("active");
//     num = $(this).attr('number');
//     console.log(num);
//     selectSizeMobile(num, $(this));
//   } else { // если есть
//     $(this).removeClass('clicked'); // убираем класс
//     selectDefaultSizeMobile();
//   }
// });

let numMobile = 1;

$(".next-btn-mobile").click( function() {
  numMobile = nextMobile(numMobile);
  console.log(numMobile);
  selectSizeMobile(numMobile, $("[numbermobile="+numMobile+"]"));
});

function nextMobile(objectNumber) {
  if (objectNumber == 4) {
    objectNumber = 1;
  } else {
    objectNumber++;
  }
  console.log(objectNumber);
  selectSize(objectNumber, $("[number="+objectNumber+"]"));
  return objectNumber;
}

$(".prev-btn-mobile").click( function() {
  numMobile = prevMobile(numMobile);
  console.log(numMobile);
  selectSizeMobile(numMobile, $("[numbermobile="+numMobile+"]"));
});

function prevMobile(objectNumber) {
  if (objectNumber == 1) {
    objectNumber = 4;
  } else {
    objectNumber--;
  }
  console.log(objectNumber);
  selectSize(objectNumber, $("[number="+objectNumber+"]"));
  return objectNumber;
}
