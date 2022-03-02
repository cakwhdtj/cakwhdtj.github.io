let counter = 0;
const _button = document.getElementById("btn");
const _span = document.querySelector("span");
function handleClick() {
    counter = counter + 1;
    _span.innerText = `Total clicks: ${counter}`;
}

_button.addEventListener("click", handleClick);