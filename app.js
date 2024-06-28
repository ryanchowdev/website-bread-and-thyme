/* Hamburger menu */
window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}

/* Contact form button */
const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");
btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};
