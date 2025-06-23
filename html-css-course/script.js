let lastScrollTop = 0;
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        footer.style.transform = "translateY(0)";
    } else {
        // Scrolling up
        footer.style.transform = "translateY(100%)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});