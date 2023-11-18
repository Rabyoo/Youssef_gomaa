const styling_txt = document.querySelector(".container header .styling-txt h2");

const textLoad = () => {
    setTimeout(() => {
        styling_txt.textContent = 'Youssef Gomaa';
    }, 0)
}
textLoad();
setInterval(textLoad, 3000)