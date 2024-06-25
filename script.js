document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2.5) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
});

function changeNav() {
    var scrollValue = window.scrollY;
    var navbar = document.getElementById('navbar');
    var viewwWidth = window.innerWidth * 0.03;
    if (scrollValue > viewwWidth) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}

window.addEventListener('scroll', changeNav);