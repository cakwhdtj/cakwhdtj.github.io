$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});




let onAdder = (e , container) => {
  let selector = e.target;
  let parents = $(container)
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}

//portfolio global