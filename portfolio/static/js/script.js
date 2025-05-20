// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Highlight active nav link based on current URL
window.addEventListener('load', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    const body = document.body;
    if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typing Animation for Homepage
const typingText = document.getElementById('typing-text');
let wordByWordTriggered = false;

if (typingText) {
    const texts = [
        'I am in<br>Backend Development',
        'I am a<br>Great Learner'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = texts[textIndex].replace('<br>', '\n'); // For character counting

    function type() {
        const displayText = texts[textIndex];
        const plainText = currentText;

        if (!isDeleting && charIndex <= plainText.length) {
            let display = '';
            let currentChar = 0;
            for (let i = 0; i < displayText.length; i++) {
                if (displayText.substring(i, i + 4) === '<br>') {
                    if (currentChar < charIndex) {
                        display += '<br>';
                    }
                    i += 3;
                } else {
                    if (currentChar < charIndex) {
                        display += displayText[i];
                    }
                    currentChar++;
                }
            }
            typingText.innerHTML = display;
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex >= 0) {
            let display = '';
            let currentChar = 0;
            for (let i = 0; i < displayText.length; i++) {
                if (displayText.substring(i, i + 4) === '<br>') {
                    if (currentChar < charIndex) {
                        display += '<br>';
                    }
                    i += 3;
                } else {
                    if (currentChar < charIndex) {
                        display += displayText[i];
                    }
                    currentChar++;
                }
            }
            typingText.innerHTML = display;
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
                currentText = texts[textIndex].replace('<br>', '\n');

                // Trigger word-by-word animation after first typing cycle
                if (!wordByWordTriggered) {
                    const wordByWordSpans = document.querySelectorAll('#word-by-word span');
                    wordByWordSpans.forEach((span, index) => {
                        span.style.animationDelay = `${index * 0.2 + 0.2}s`;
                    });
                    wordByWordTriggered = true;
                }
            }
            setTimeout(type, isDeleting ? 50 : 1000);
        }
    }
    type();
}

// Particles.js Background
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 1000 } },
        color: { value: '#007bff' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#007bff', opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    disable: 'mobile'
});

// document.querySelectorAll('.social-links a').forEach((link, index) => {
//     link.setAttribute('data-aos', 'fade-up');
//     link.setAttribute('data-aos-delay', index * 100);
// });