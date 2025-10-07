const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

const check = document.querySelector('.check');
if (check) {
    check.addEventListener('change', function() {
        applyLanguage(this.checked);
    });
}

// Scroll suave para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});
// Acordeón FAQ
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const content = header.nextElementSibling;

      // Cerrar cualquier otro abierto
      document.querySelectorAll(".accordion-item").forEach(item => {
        if (item !== currentItem) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Alternar el actual
      currentItem.classList.toggle("active");

      if (currentItem.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
