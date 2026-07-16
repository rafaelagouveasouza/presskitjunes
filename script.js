// Animação suave ao carregar a página

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});



// Efeito de fade-in ao rolar a página

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});



sections.forEach((section) => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "0.8s ease";

observer.observe(section);

});
