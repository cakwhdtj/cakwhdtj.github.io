$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$("#games").on("click" , function (e) {
  onAdder(e, '#games');
  console.log(e)
});



let onAdder = (e , container) => {
  let selector = e.target;
  let parents = $(container)
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}

//portfolio global