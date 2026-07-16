// FADE IN DAS SEÇÕES

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
    section.style.transition = ".8s ease";

    observer.observe(section);

});




// BOTÃO VOLTAR AO TOPO

const topBtn = document.getElementById("topBtn");


window.onscroll = () => {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};


// VOLTAR AO TOPO

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
