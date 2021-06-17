"use strict";
//main checking
var winWidth = $(window).width();

if ($("main").attr("class") === "lookbook") {
  $(".nav__menuSide").css({ display: "block" });
  pageIndicator();
  mCheck();
  scrolling("lookbook");
  if (winWidth > 720) {
    $(".nav__menuBtn").css({ display: "none" });
  } else {
    $(".nav__menuSide").css({ display: "none" });
  }
}
if ($("main").attr("class") === "shop") {
  //check if it's subpage-shop
  $(".nav__menuSide").css({ display: "block" });
  pageIndicator();
  mCheck();
  scrolling("shop");
  if (winWidth > 720) {
    $(".nav__menuBtn").css({ display: "none" });
  } else {
    $(".nav__menuSide").css({ display: "none" });
  }
} else if ($("main").attr("id") === "index") {
  slideCarou();
  mCheck();
  showDiv();
  scrolling("index");
  $(".nav__menuBtn").css({ display: "block" });
  if (winWidth > 720) {
    $(".nav__menuBtn").css({ display: "none" });
  }
}

// nav btn animatin
$(".nav__menuBtn").append("<span></span><span></span><span></span>");

var active = 0;
var navBtn = $("button.nav__menuBtn");
var activeCheck = 0;
navBtn.on("click", function () {
  winWidth = $(window).width();
  $(navBtn).toggleClass("active");
  $("nav").removeClass("on");
  navSideActivate();
  var hihi = $(navBtn).attr("class");
  if (winWidth < 720 && hihi === "nav__menuBtn active") {
    $("nav").before('<div id="layer-mask"></div>');
  } else {
    $("#layer-mask").remove();
  }
});

function pageIndicator() {
  var mainCheck = $("main").attr("class");
  $("nav").append(
    "<div id='pageIndicator'><a href='index.html'>home</a> > " +
      mainCheck +
      " </div>"
  );
}
function navSideActivate() {
  if (navBtn.attr("class") === "nav__menuBtn active") {
    $(".nav__menuSide")
      .css({
        display: "block",
        opacity: "0",
      })
      .animate({ opacity: 1 });
  } else {
    $(".nav__menuSide").animate({ opacity: 0 }).stop().css({ display: "none" });
  }
}

// section1 main img slide

function slideCarou(n) {
  var numSlide = $("div.imgSlide_div img.mainImg_slide").length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var firstSlide = 1;
  var timerId = "";
  var isTimerOn = true;
  var timerSpeed = 4000;
  showImg(firstSlide);

  function showImg(n) {
    clearTimeout(timerId);
    $("div.imgSlide_div").find(".on").removeClass("on");
    $("div.imgSlide_div img.mainImg_slide:eq(" + (n - 1) + ")").addClass("on");
    slideNow = n;
    slidePrev = n <= 1 ? numSlide : n - 1;
    slideNext = n >= numSlide ? 1 : n + 1;
    if (isTimerOn === true) {
      timerId = setTimeout(function () {
        showImg(slideNext);
      }, timerSpeed);
    }
  }
}

// section2 show hiddne div

function showDiv() {
  var divHeight = $("div.mainArticle").height();
  var divCount = $("div.mainArticle").length;
  var setHeight = divHeight * divCount;
  var section2Top = $(".section2").offset().top;

  section2Initialize();
  section2SlideBtn(section2Top);

  $(window).on("resize", function () {
    winWidth = $(window).width();
    section2Top = $(".section2").offset().top;

    section2Initialize();
    section2SlideBtn(section2Top);
    $(".section2 > ul li + li").removeClass("on");
  });

  $(".section2_showArticleBtn").on("click", function () {
    winWidth = $(window).width();
    $("html, body")
      .stop(true)
      .animate({ scrollTop: section2Top - 80 });
    if ($(".section2").height() === setHeight) {
      $(".section2_showArticleBtn i").removeClass();
      $(".section2_showArticleBtn i").addClass("fas fa-angle-double-down");
      $(".section2").css({ boxShadow: "none" });
      $("#btnSpan").text("more");
      $(".section2").height(divHeight);
      $(".section2 ul li + li").stop(true).animate({ opacity: 0 }, 100);
      $(".section2 > ul li + li").removeClass("on");
    } else {
      $(".section2_showArticleBtn i").removeClass();
      $(".section2_showArticleBtn i").addClass("fas fa-angle-double-up");
      $(".section2").css({ boxShadow: "2px 2px 6px #f1f1f1" });
      $("#btnSpan").text("close");
      $(".section2").height(setHeight);
      $(".section2 > ul li").addClass("on");
      $(".section2 ul li.on").stop(true).animate({ opacity: 1 }, 100);
    }
  });

  function section2Initialize() {
    if (winWidth <= 720) {
      $(".btnContainer").css({ display: "block" });
      $(".section2").height(setHeight - 50 + "px");
      $(".section2_showArticleBtn").css({ display: "none" });
    } else {
      $(".btnContainer").css({ display: "none" });
      $(".section2").height(divHeight);
      $(".section2_showArticleBtn").css({ display: "block" });
      $(".nav__menuBtn").css({ display: "none" });
    }
  }
}

//shop
sizeIndication();
function sizeIndication() {
  var sBoxWidth = 0;
  mouseOverOnProduct();
  var sizeBoxWidth = $(".shop .section1 ul li ul li > span").width();

  function mouseOverOnProduct() {
    $(".shop .section1 ul li ul li img").on("mouseover", function () {
      $(this).siblings("span").css({ display: "block" });
      sBoxWidth = $(".shop .section1 ul li ul li > span").width();
      $(".shop .section1 ul li ul li > span").css({
        marginLeft: "-" + sBoxWidth / 2 + "px",
      });
      $(".shop .section1 ul li ul li img").on("mouseleave", function () {
        $(".shop .section1 ul li ul li > span").css({ display: "none" });
      });
    });
  }
}

function mCheck() {
  $(window).resize(function () {
    winWidth = $(window).width();
    $("#layer-mask").remove();
    $("button.nav__menuBtn").removeClass("active");
    if (winWidth >= 720) {
      $(".nav__menuBtn").css({ display: "none" });
      $(".nav__menuSide").css({ display: "block" });
      $(".h2_feature").css({ display: "inline-block" });
    } else {
      $(".nav__menuBtn").css({ display: "block" });
      $(".nav__menuSide").css({ display: "none" });
      $(".h2_feature").css({ display: "none" });
    }
  });
}
function section2SlideBtn(s2Top) {
  var btnContainerTop = s2Top + 350 + "px";
  $("div.btnContainer button").css({ top: btnContainerTop });
}
//section3
section2Click();
function section2Click() {
  var numSlide = $(".section2 > ul li").length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var firstSlide = 1;
  var timerId = "";
  var isTimerOn = false;
  var timerSpeed = 4000;

  showSlide(firstSlide);
  $("div.btnContainer button:nth-child(1)").on("click", function () {
    showSlide(slidePrev);
  });
  $("div.btnContainer button:nth-child(2)").on("click", function () {
    showSlide(slideNext);
  });

  function showSlide(n) {
    clearTimeout(timerId);
    $(".section2 ul").find(".on").removeClass("on").removeAttr("style");
    $(".section2 > ul li:eq(" + (n - 1) + ")").addClass("on");
    $(".section2 ul li.on").stop(true).animate({ opacity: 1 }, 100);
    slideNow = n;
    slidePrev = n <= 1 ? numSlide : n - 1;
    slideNext = n >= numSlide ? 1 : n + 1;
    if (isTimerOn === true) {
      timerId = setTimeout(function () {
        showSlide(slideNext);
      }, timerSpeed);
    }
  }
}

function scrolling(n) {
  var section1Top = 0;
  var section2Top = 0;
  var scrollAmt = 0;

  $(document).on("scroll", function () {
    section1Top = $(".section1").offset().top;
    scrollAmt = $(document).scrollTop();
    if (n === "index") {
      section2Top = $(".section2").offset().top;
      if (scrollAmt >= section2Top) {
        $("nav").addClass("on");
      } else {
        $("nav").removeClass("on");
      }
    }
    if (n === "shop") {
      if (scrollAmt >= section1Top) {
        $("nav").addClass("on");
      } else {
        $("nav").removeClass("on");
      }
    }
    if (n === "lookbook") {
      if (scrollAmt >= section1Top) {
        $("nav").addClass("on");
      } else {
        $("nav").removeClass("on");
      }
    }
    if (winWidth <= 720 && navBtn.attr("class") === "nav__menuBtn active") {
      $("nav").removeClass("on");
    }
  });
}

lookbook_1();
function lookbook_1() {
  var timerId = "";
  if ($("main").attr("class") === "lookbook_1") {
    if (winWidth > 720) {
      $(".nav__menuBtn").css({ display: "none" });
      // $("#circle").css({
      //   border: "900px solid rgba(183, 183, 183, 0.216)",
      //   width: 10000 + "px",
      //   height: 10000 + "px",
      //   top: -180 + "%",
      //   left: -350 + "%",
      //   opacity: 0,
      // });
      timerId = setTimeout(function () {
        showlookbookSection1();
      }, 500);

      function showlookbookSection1() {
        $(".lookbook_1 .section1 div").css({
          opacity: 1,
          width: "100%",
          boxShadow: "2px 2px 6px #f1f1f1",
        });
        $(".lookbook_1 .section1 div > h2").css({ opacity: 1 });
        $(".lookbook_1 .section1 div > p").css({ opacity: 1 });
        $(".lookbook_1 .section1 div > h3").css({ top: 0, opacity: 0 });
      }
    } else {
      $(".nav__menuSide").css({ display: "none" });
      $("#circle").css({
        display: "none",
      });
    }
    $(window).on("resize", function () {
      winWidth = $(window).width();
      clearTimeout(timerId);
      if (winWidth > 720) {
        $(".nav__menuBtn").css({ display: "none" });
        $(".nav__menuSide").css({ display: "block" });
      } else {
        $(".nav__menuSide").css({ display: "none" });
        $(".nav__menuBtn").css({ display: "block" });
      }
    });
  }
}
