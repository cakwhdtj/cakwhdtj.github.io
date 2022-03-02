const clock = document.querySelector("h2#clock");

function getclock() {
    const date = new Date();
    const housrs = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${housrs}:${minutes}:${seconds}`
}

getclock();
setInterval(getclock, 1000);