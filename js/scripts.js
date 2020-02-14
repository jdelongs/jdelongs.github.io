/* navbar sticky on scroll animation */
window.addEventListener("scroll",
    function() {
        let navArea = document.getElementById('navigation');
        if (window.pageYOffset > 0) {
            navArea.classList.add("sticky");
        } else {
            navArea.classList.remove("sticky");
        }
    });