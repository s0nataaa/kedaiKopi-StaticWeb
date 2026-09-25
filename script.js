const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    
    const scrollThreshold = 600; 

    let opacity = scrollY / scrollThreshold;
    
    if (opacity > 1) opacity = 1;
    if (opacity < 0) opacity = 0;

    header.style.setProperty("--header-opacity", opacity);

    if (scrollY > 300) {
    }
});