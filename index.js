function slider () {
    const slider = document.querySelector("#slider");
    const img = document.querySelectorAll('img');
    const btnPrev = document.querySelector("#btnPrev");
    const btnNext = document.querySelector("#btnNext");
    let currentSlideIndex = 0;

    console.log(img[0].dataset.index);

    img.forEach((slide, index) => {
        if (index !== 0) slide.classList.add("hidden");
        slide.dataset.index = index.toString();

        img[0].setAttribute("data-active", "");

    });

    updateButtonState();

    btnNext.onclick = () => {
        showNextSlide("next");
        updateButtonState();
    }

    btnPrev.onclick = () => {
        showNextSlide("prev");
        updateButtonState();
    }

    function showNextSlide(direction) {
        const currentSlide = slider.querySelector("[data-active]");
        currentSlideIndex = +currentSlide.dataset.index;
        currentSlide.classList.add("hidden");
        currentSlide.removeAttribute("data-active");
        if (direction === "next") {
            currentSlideIndex = currentSlideIndex + 1;
        } else if (direction === "prev") {
            currentSlideIndex = currentSlideIndex === 0 ? 0 : currentSlideIndex - 1;
        }

        const nextSlide = slider.querySelector(`[data-index="${currentSlideIndex}"]`);
        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute("data-active", "");
    }

    function updateButtonState() {
        if (currentSlideIndex === 0) {
            btnPrev.disabled = true;
            return;
        }
        if (currentSlideIndex === img.length - 1) {
            btnNext.disabled = true;
            return;
        }
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

slider();