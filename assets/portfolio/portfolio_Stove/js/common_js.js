$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

$("body").on("click" , function (e) {
  // $(e.target).parents() ? console.log('yes') : console.log('no');
  // console.log($(e.target).parents().find("#games li.on"))
  console.log($(e.target).parents().find("#games"))
  
})

$("#games").on("click" , function (e) {
  onAdder(e, '#games');
  // console.log(e)
});



let onAdder = (e , container) => {
  let selector = e.target;
  let parents = $(container)
  $(selector).closest('li').siblings('.on').removeClass('on')
  $(selector).closest('li').toggleClass('on');
}

//portfolio global