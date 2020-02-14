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

/* Mobile Nav event listen for closing the nav */

window.onload = (event) => {
    const windowWidth = window.matchMedia("(max-width: 550px)");
    if (windowWidth.matches) {
        document.getElementById('nav-mobile_list').addEventListener('click', function() {
            const mobileNavCheckbox = document.getElementById('nav-mobile_checkbox');
            if (mobileNavCheckbox.checked) {
                mobileNavCheckbox.checked = false;
            }
        });

    }
}