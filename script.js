const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (subjectInput.value.trim() === "") {
        alert("Please enter a subject.");
        return;
    }

    if (messageInput.value.trim().length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});

const learnBtn = document.getElementById("learnBtn");
const aboutSection = document.getElementById("about");
learnBtn.addEventListener("click", function () {
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".header ul li a");
window.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});