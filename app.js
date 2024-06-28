window.onload = function() {
    /* Hamburger menu */
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })



    /* Contact form button */
    const contact_btn = document.querySelector("#contact-btn");
    const contact_btnText = document.querySelector("#contact-btnText");

    /* Delay 2s before following link */
    contact_btn.onclick = function (event) {
        event.preventDefault();
        contact_btnText.innerHTML = "Thanks";
        contact_btn.classList.add("active");
        setTimeout(function () {
            location.href = 'thanks.html';
        }, 2000);
    };
}
