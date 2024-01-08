const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 1.5;
    const y = e.clientY - rect.top - rect.height / 1.5;

    const angle = Math.atan2(-x, y);
    card.style.setProperty("--rotation", angle + "rad");
});

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile_nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}
