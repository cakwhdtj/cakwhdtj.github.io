$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$("body").on("click" , function (e) {
  console.log(e)
  e.target.parents("#games") ? null : $("#games").find("li.on").removeClass('on');

  // if ($("#games").find("li.on")) {
  //   $("#games").find("li.on").removeClass('on');
  // }
});

$("#games").on("click" , function (e) {
  onAdder(e, '#games');
});



let onAdder = (e , container) => {
  let selector = e.target;
  let parents = $(container)
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}

//portfolio global