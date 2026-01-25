// script.js

const navItems = document.querySelectorAll('nav li');
const sections = document.querySelectorAll('.doc-section');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.section;

    // Activar la sección correspondiente
    sections.forEach(sec => {
      if (sec.id === target) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Opcional: scroll suave hacia la sección
    sections.forEach(sec => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  });
});
