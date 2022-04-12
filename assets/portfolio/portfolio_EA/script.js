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

if (winWidth < 800) {
  menuBtn();
}
gnbMouseover(); //gnb ui 동작
topLineHide(); //scroll 시 맨 위에 줄을 숨기는 동작
langugaeBtn(); //footer에 언어 선택 박스 ui
if ($("main").attr("id") === "index_main") {
  section_bar(4); //section4 bar 동작
  section4_btn(4); //section4에 화살표 버튼 동작
}
if ($("main").attr("id") === "sub1_game_main") {
  section_bar(2); //section4 bar 동작
  section4_btn(2); //section4에 화살표 버튼 동작
}
// ----------------------------------------------

function menuBtn() {
  $(".menuBtn").on("click", function () {
    add_On($(this));
    add_On($("#gnb > div:nth-child(2) > div > ul"));
  });
}

function topLineHide() {
  //scrolltop 값을 받고 스크롤 방향을 알아낸 뒤 스크롤이 아래로 갈때만 동작
  //100 이상인 이유는 사파리에서 페이지 맨위로 땡겼을때  튕기는 동작때문에 사라지는 현상 방지
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
  //네비게이션 화살표 버튼을 누르면 현제 class="on" 이 붙은 li의 인덱스값을 받아옴
  //만약 다음버튼을 누른다면 index +1에 showArticle() 로 class="on" 을 붙힘
  //반대 화살표면 index -1 에 showArticle() 로 class="on" 을 붙힘
  var showNext = 0;
  var showPrev = 0;
  var index = 0;
  $("#section" + sectionNum + "_bar > button").on("click", function () {
    var btnIndex = $(this).index(); //0 or 2
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
  //section4에 기사 카테고리를 click 하면 showArticle이 동작함
  $("#section" + sectionNum + "_categories > li > a").on("click", function (e) {
    // e.preventDefault();
    showArticle($(this));
  });
}

function gnbMouseover() {
  //on 이 붙으면 submenu가 열린다
  //gnb a 에 mouseover 시 기존에 on을 때고 새로 단다 ('function leaveaction()')
  //on이 붙은 submenu는 해당 영역에서 벗어날 때 on이 떨어지고 상위매뉴의 스타일이 지워진다
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
  //footer에 언어 선택 박스 ui
  //css 에 작업해둔 뒤 function add_on()을 이용해 클래스를 toggle한다
  //on이 붙기전 버튼 안에 a는 showing 으로 해결하고
  //다른 a를 클릭,focus 하면 해당 a에 showing이 붙고 이전 class는 제거한다
  $("#footer_lowerSection #languageBox > button").on("click focus", function (
    e
  ) {
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
  //selector를 받아 on 클래스를 붙이는 function
  $(selector).toggleClass("on");
}
function showArticle(selector) {
  //기존 class="on" 을 때고 selector에게는 새로 붙이는 function
  $(".ctgBar li.on").removeClass("on");
  $(".ctgBar li span.on").removeClass("on");
  add_On($(selector).parent());
  add_On($(selector).find("span"));
}


//portfolio global
document.write("<script src='../../../assets/js/portfolioGlobal.js'></script>");