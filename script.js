// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".count");

const runCounter = (counter) => {
    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            counter.innerText = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});

// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index) {

    testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".product-card, .about-content, .about-image, .gallery-grid img, .testimonial, .contact-form"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    revealObserver.observe(element);
});

// =========================
// PARALLAX HERO IMAGE
// =========================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// =========================
// SMOOTH BUTTON ANIMATION
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("current");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("current");
        }

    });

});

// =========================
// CONTACT FORM DEMO
// =========================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for contacting Sweet Mechanics! We will get back to you soon."
    );

    form.reset();

});