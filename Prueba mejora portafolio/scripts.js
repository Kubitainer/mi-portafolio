document.addEventListener("DOMContentLoaded", () => {
    // Navegación Suave
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const target = event.target.getAttribute("href");
            // Solo activa la navegación suave si el enlace es interno (empieza con '#')
            if (target.startsWith("#")) {
                event.preventDefault(); // Evita el comportamiento por defecto
                const targetId = target.slice(1);
                const targetSection = document.getElementById(targetId);
    
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
    

    // Resaltar la sección activa en el menú
    const sections = document.querySelectorAll("section");
    const navBar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Ajuste para compensar el header
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
