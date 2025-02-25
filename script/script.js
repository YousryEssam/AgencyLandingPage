document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.querySelector(".side-menu");
    
    function toggleMenu() {
        sideMenu.classList.toggle("active");
    }


    function test() {
        console.log("Test");
        if (side_menu) {
            side_menu.style.display = side_menu.style.display === 'flex' ? 'none' : 'flex';
        } else {
            console.error("Element #side-menu not found!");
        }
    }


    


    // Expose function globally for onclick event
    window.toggleMenu = toggleMenu;
});