let scrollbar = document.querySelector(".posBar")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    scrollbar.style.bottom = `${scroll}%`
});