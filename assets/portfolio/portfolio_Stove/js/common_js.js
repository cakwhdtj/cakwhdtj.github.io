const { indexOf } = require("lodash");

$('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

document.querySelector(".slide_container").addEventListener("click" , e => {
  showSlide(e);
})


let showSlide = (e) => {
  let selector = $(e.currentTarget);
  console.log(indexOf(selector.find('li.on')))
  // selector.find(".indicator li").removeClass('on');

}




//portfolio global