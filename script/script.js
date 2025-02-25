document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.querySelector(".side-menu");
    function toggleMenu() {
        sideMenu.classList.toggle("active");
    }
    window.toggleMenu = toggleMenu;
});