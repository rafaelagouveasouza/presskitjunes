// Fade in das seções

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});


sections.forEach((section) => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "0.8s ease";

observer.observe(section);

});




// Botão voltar ao topo

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", () => {

if (document.documentElement.scrollTop > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});



topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});
