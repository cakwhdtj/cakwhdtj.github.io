$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$("body").on("click" , function (e) {
  onAdder(e, '#games');
  console.log(e)
});



let onAdder = (e) => {
  let selector = e.target;
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}

//portfolio global