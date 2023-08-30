const hamburger = document.querySelector(".global-header-burger");
const navMenu = document.querySelector(".global-header-burger-nav");
const wrapper = document.querySelector(".wrapper");
const burgerLinks = document.querySelectorAll(".burger-nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    wrapper.classList.toggle("active");

    burgerLinks.forEach(link => {
        link.classList.toggle("active");
    });

    document.body.classList.toggle("no-scroll", hamburger.classList.contains("active"));
});
document.addEventListener("click", event => {
    const isClickInsideHeader = hamburger.contains(event.target);
    const isHeaderActive = hamburger.classList.contains("active");

    if (isHeaderActive && !isClickInsideHeader) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        wrapper.classList.remove("active");

        burgerLinks.forEach(link => {
            link.classList.remove("active");
        });

        document.body.classList.remove("no-scroll");
    }
});
