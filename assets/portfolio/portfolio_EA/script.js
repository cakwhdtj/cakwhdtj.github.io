"use strict";
var winWidth = $(window).width();
$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});
$(window).on("resize", function () {
  if (winWidth < 800) {
    menuBtn();
  }
});
if (winWidth < 800) {menuBtn();}
gnbMouseover();
topLineHide();
langugaeBtn();
if ($("main").attr("id") === "index_main") {
  section_bar(4);
  section4_btn(4);
}
if ($("main").attr("id") === "sub1_game_main") {
  section_bar(2);
  section4_btn(2);
}

function menuBtn() {
  $(".menuBtn").on("click", function () {
    add_On($(this));
    add_On($("#gnb > div:nth-child(2) > div > ul"));
  });
}

function topLineHide() {
  var lastScrollTop = 0;
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop >= 100) {
      if (scrollTop > lastScrollTop) {
        $("#gnb").css({ transform: "translateY(-40px)" });
      } else {
        $("#gnb").removeAttr("style");
      }
    }
    lastScrollTop = scrollTop;
  });
}
function section4_btn(sectionNum) {
  var showNext = 0;
  var showPrev = 0;
  var index = 0;
  $("#section" + sectionNum + "_bar > button").on("click", function () {
    var btnIndex = $(this).index();
    index = $("#section" + sectionNum + "_categories li.on").index();
    showNext = $(
      "#section" + sectionNum + "_categories > li:eq(" + (index + 1) + ") a"
    );
    showPrev = $(
      "#section" + sectionNum + "_categories > li:eq(" + (index - 1) + ") a"
    );
    if (btnIndex === 2) {
      showArticle(showNext);
    } else if (btnIndex === 0) {
      showArticle(showPrev);
    }
  });
}
function section_bar(sectionNum) {
  $("#section" + sectionNum + "_categories > li > a").on("click", function (e) {
    showArticle($(this));
  });
}

function gnbMouseover() {
  var timerId = "";
  var isTimerOn = "";
  $("#gnb > div:nth-child(2) > div > ul > li > a").on(
    "mouseover focus",
    function (e) {
      e.preventDefault();
      $(this).on("mouseenter focus", function () {
        leaveAction($("ul.submenu"));
        if (isTimerOn === true) return false;
      });
      timerId = setTimeout(() => {
        isTimerOn = true;
        $(this).next("ul.submenu").addClass("on");
        if (isTimerOn === true) {
          $(this).css({ color: "#fe4747" });
        }
      }, 10);
    }
  );
  $(".navi").on("mouseleave", function () {
    leaveAction("ul.submenu");
  });
  $("ul.submenu").on("mouseleave", function () {
    leaveAction($(this));
  });
}
function leaveAction(selector) {
  $(selector).removeClass("on");
  $(selector).parent().find("a").removeAttr("style");
}
function langugaeBtn() {
  $("#footer_lowerSection #languageBox > button").on("click focus", function (e) {
    e.preventDefault();
    add_On("#footer_lowerSection #languageBox > button > ul > li");
    add_On("#footer_lowerSection #languageBox > button > ul");
    add_On("#languageBox .material-icons");
  });
  $("#footer_lowerSection #languageBox > button > ul > li > a").on(
    "click focus",
    function (e) {
      e.preventDefault();
      var parent = $(this).parent();
      var check = parent.attr("class");
      if (check === "showing") {
      } else {
        $("#languageBox > button > ul").find(".showing").removeClass("showing");
        parent.addClass("showing");
      }
    }
  );
}
function add_On(selector) {
  $(selector).toggleClass("on");
}
function showArticle(selector) {
  $(".ctgBar li.on").removeClass("on");
  $(".ctgBar li span.on").removeClass("on");
  add_On($(selector).parent());
  add_On($(selector).find("span"));
}


//portfolio global
document.write("<script src='../../../assets/js/portfolioGlobal.js'></script>");