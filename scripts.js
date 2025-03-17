function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.remove('active');
    burger.classList.remove('active');
}

// Har bir linkka yopish funksiyasini qo'shish
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});