// Smooth Scroll Active Link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Typing Effect
const roles = [
    "Data Analyst",
    "Aspiring Data Scientist",
    "Power BI Developer",
    "SQL Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const roleHeading = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!roleHeading) return;

    if (charIndex < roles[roleIndex].length) {
        roleHeading.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (!roleHeading) return;

    if (charIndex > 0) {
        roleHeading.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

window.onload = () => {
    if (roleHeading) {
        roleHeading.textContent = "";
        typeEffect();
    }
};

// Reveal Animation
const revealElements = document.querySelectorAll("section");

function reveal() {
    revealElements.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
reveal();