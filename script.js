(function () {
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");
    const contentBoxs = document.querySelectorAll("main .content-box");
    const contentBoxsLen = contentBoxs.length;
    let slideIdx = 0;

    nextBtn.addEventListener("click", () => moveSlide(slideIdx + 1));
    prevBtn.addEventListener("click", () => moveSlide(slideIdx - 1));

    const moveSlide = (n) => {
        const classHandler = (slideIdx, n) => {
            contentBoxs[slideIdx].classList.remove("is-active")
            contentBoxs[n].classList.add("is-active")
        };

        if (n > slideIdx) {
            if (n >= contentBoxsLen) n = 0;
            classHandler(slideIdx, n)
        } else {
            if (n < 0) n = contentBoxsLen - 1;
            classHandler(slideIdx, n)
        }
        slideIdx = n;
    };
})();