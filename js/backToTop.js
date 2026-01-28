const backToTopBtn = document.querySelector("#backToTop");

// mostrar / ocultar
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// volver arriba
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
